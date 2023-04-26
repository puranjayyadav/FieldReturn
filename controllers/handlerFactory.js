const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const APIFeatures = require('./../utils/apiFeatures');
const fs = require('fs');
const path = require('path');

const PDFDocument = require('pdfkit');
exports.deleteOne = Model =>
  catchAsync(async (req, res) => {
    const doc = await Model.findByIdAndDelete(req.params.id);
    if (!doc) {
      return next(new AppError('No document found with that id', 404));
    }
    res.status(204).json({
      status: 'success',
      data: null
    });
  });

exports.updateOne = Model =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!doc) {
      return next(new AppError('No document found with that id', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        data: doc
      }
    });
  });

exports.createOne = Model =>
  catchAsync(async (req, res) => {
    console.log('Handler Factory body ');
    console.log(req.body);

    const doc = await Model.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        status: 'success',
        results: doc.length,
        data: doc
      }
    });
    console.log('Handler Factory body after create function ');
    console.log(req.body);
  });

exports.getOne = (Model, popOptions) =>
  catchAsync(async (req, res, next) => {
    //console.log(req.params);
    let query = Model.findById(req.params.id);
    if (popOptions) query = query.populate(popOptions);
    const doc = await query;
    //console.log(doc._id);
    // Tour.findOne({ _id: req.params.id })
    if (!doc) {
      return next(new AppError('No document found with that id', 404));
    }
    //console.log(IMP);
    res.status(200).json({
      status: 'success',
      data: {
        data: doc
      }
    });
  });

exports.getAll = Model =>
  catchAsync(async (req, res, next) => {
    // To allow for nested GET on pumps
    let filter = {};
    if (req.params.pumpId) filter = { pump: req.params.pumpId };

    const features = new APIFeatures(Model.find(filter), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const doc = await features.query;

    //Send Response
    res.status(200).json({
      status: 'success',
      results: doc.length,
      data: {
        data: doc
      }
    });
  });

exports.updateOneMetal = Model =>
  catchAsync(async (req, res, next) => {
    // req.params.id = req.user.id;
    console.log('Hit update one metal middleware');
    console.log(req.params);
    console.log(req.body);
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body);
    //console.log(doc);
    if (!doc) {
      return next(new AppError('No document found with that id', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        data: doc
      }
    });
  });

exports.getReport = Model =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);
    const doc = await query;

    console.log('Getting Report for you');
    const reportID = req.params.id;
    const reportName = 'Report-' + reportID + '.pdf';
    const reportPath = path.join('invoices', reportName);
    const dateString = doc.date;

    // Create a new Date object from the date string
    const Newdate = new Date(dateString);
    // Get the day and date using Date object methods
    const day = Newdate.toLocaleString('en-US', { weekday: 'short' });
    const dateNum = Newdate.getDate();
    const hours = Newdate.getHours();
    const minutes = Newdate.getMinutes();
    // Format the day and date into a shortened string
    const shortenedDateString = `${day} ${dateNum} ${hours}:${minutes}`;
    const shortenedTime = `${hours}:${minutes}`;

    const pdfDoc = new PDFDocument();
    pdfDoc
      .font('Helvetica-BoldOblique')
      .fontSize(20)
      .text(`Field Return Part Number ${doc.FIP} Summary`, {
        align: 'center',
        underline: true
      })
      .moveDown();
    // Add invoice details

    pdfDoc
      .font('Helvetica-Bold')
      .fontSize(14)
      .text('Overall Information', { align: 'center' })
      .moveDown();
    pdfDoc
      .fontSize(12)
      .font('Helvetica')

      .text(`Registration Number: ${doc.registrationNumber}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Date: ${shortenedDateString}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Time: ${shortenedTime}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`OECD: ${doc.OECD}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Time: ${shortenedTime}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Parts Recieved: ${doc.partsRecieved}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Courier/Docker Detail: ${doc.partsRecieved}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Complaint reported at BDS: ${doc.partsRecieved}`, {
        align: 'left'
      });
    pdfDoc
      .text(
        `WJC No.: ${doc.partsRecieved}`,
        {
          align: 'right',
          lineGap: 3
        },
        160,
        10
      )
      .text(`FIP Type/Part No.: ${doc.partsRecieved}`, {
        align: 'right',
        lineGap: 3
      })
      .text(`Failure Hours: ${doc.partsRecieved}`, {
        align: 'right',
        lineGap: 3
      })
      .text(`Location BDS: ${doc.partsRecieved}`, {
        align: 'right',
        lineGap: 3
      })
      .text(`Investigation Details: ${doc.partsRecieved}`, {
        align: 'right',
        lineGap: 3
      })
      .text(`Date of closing: ${doc.partsRecieved}`, {
        align: 'right',
        lineGap: 3
      })
      .text(`Final State: ${doc.partsRecieved}`, {
        align: 'right',
        lineGap: 3
      })
      .moveDown()
      .moveDown();

    pdfDoc
      .font('Helvetica-Bold')
      .fontSize(14)
      .text('Pre-Investigation details', { align: 'center' })
      .moveDown();
    pdfDoc
      .fontSize(12)
      .font('Helvetica')
      .text(`Date: ${shortenedDateString}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Pump Part Number: ${shortenedTime}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Serial Number (with MFD): ${doc.OECD}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`LAC: ${shortenedTime}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`eJC Number: ${doc.partsRecieved}`, {
        align: 'left',
        lineGap: 3
      });
    pdfDoc
      .text(
        `Dealer : ${doc.partsRecieved}`,
        {
          align: 'right',
          lineGap: 3
        },
        340,
        10
      )
      .text(`Application: ${doc.partsRecieved}`, {
        align: 'right',
        lineGap: 3
      })
      .text(`Voice of Customer: ${doc.partsRecieved}`, {
        align: 'right',
        lineGap: 3
      })
      .text(`Failure Hours: ${doc.partsRecieved}`, {
        align: 'right',
        lineGap: 3
      })
      .text(`Seal condition: ${doc.partsRecieved}`, {
        align: 'right',
        lineGap: 3
      })
      .moveDown()
      .moveDown();

    pdfDoc
      .font('Helvetica-Bold')
      .fontSize(14)
      .text('Observations', { align: 'center' })
      .moveDown()
      .moveDown();
    pdfDoc
      .fontSize(12)
      .font('Helvetica')

      .text(`Date: ${shortenedDateString}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Fuel Related Issues: ${doc.OECD}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Hitting mark on timer plate: ${shortenedTime}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Blueish mark on camplate/rollers: ${doc.partsRecieved}`, {
        align: 'left',
        lineGap: 3
      })
      .text(
        `Pitting on camplate ( Inner edge/outer edge): ${doc.partsRecieved}`,
        {
          align: 'left',
          lineGap: 3
        }
      );

    pdfDoc
      .text(`Number of camplate lobes damaged: ${doc.partsRecieved}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Number of roller damaged: ${doc.partsRecieved}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Rubbing marks - cross disk: ${doc.partsRecieved}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Delta: ${doc.partsRecieved}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Rubbing mark - drive shaft claw: ${doc.partsRecieved}`, {
        align: 'left',
        lineGap: 3
      })
      .moveDown()
      .moveDown();
    pdfDoc.addPage();
    pdfDoc
      .font('Helvetica-Bold')
      .fontSize(14)
      .text('Cross Disk FMR Measurements Details', { align: 'center' })
      .moveDown();
    pdfDoc
      .fontSize(12)
      .font('Helvetica')

      .text(`Date: ${doc.registrationNumber}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`S1 center face: ${shortenedDateString}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Perpendicularity 1: ${shortenedTime}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Perpendicularity 2: ${doc.OECD}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`S2 center face: ${shortenedTime}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Perpendicularity 1: ${doc.partsRecieved}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Perpendicularity 2: ${doc.partsRecieved}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`S3 center face: ${doc.partsRecieved}`, {
        align: 'left'
      });
    pdfDoc
      .text(
        `Perpendicularity 2: ${doc.partsRecieved}`,
        {
          align: 'right',
          lineGap: 3
        },
        160,
        10
      )
      .text(`S3 center face: ${doc.partsRecieved}`, {
        align: 'right',
        lineGap: 3
      })
      .text(`Perpendicularity 1: ${doc.partsRecieved}`, {
        align: 'right',
        lineGap: 3
      })
      .text(`Perpendicularity 2: ${doc.partsRecieved}`, {
        align: 'right',
        lineGap: 3
      })
      .text(`Hyd. Head KOT: ${doc.partsRecieved}`, {
        align: 'right',
        lineGap: 3
      })
      .text(`Date of closing: ${doc.partsRecieved}`, {
        align: 'right',
        lineGap: 3
      })
      .text(`Final State: ${doc.partsRecieved}`, {
        align: 'right',
        lineGap: 3
      })
      .moveDown()
      .moveDown();

    pdfDoc
      .font('Helvetica-Bold')
      .fontSize(14)
      .text('Mettalurgical Analysis Details', { align: 'center' })
      .moveDown();
    pdfDoc
      .fontSize(12)
      .font('Helvetica')
      .text(`Date: ${shortenedDateString}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Camplate Hardness: ${shortenedTime}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Camplate: ${doc.OECD}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Roller residual stress: ${shortenedTime}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Roller Hardness: ${doc.partsRecieved}`, {
        align: 'left',
        lineGap: 3
      });
    pdfDoc
      .text(
        `Max: ${doc.partsRecieved}`,
        {
          align: 'right',
          lineGap: 3
        },
        340,
        10
      )
      .text(`Min: ${doc.partsRecieved}`, {
        align: 'right',
        lineGap: 3
      })
      .text(`Actual value: ${doc.partsRecieved}`, {
        align: 'right',
        lineGap: 3
      })
      .text(`Delta: ${doc.partsRecieved}`, {
        align: 'right',
        lineGap: 3
      })
      .text(`Remark: ${doc.partsRecieved}`, {
        align: 'right',
        lineGap: 3
      })
      .moveDown()
      .moveDown();

    pdfDoc.addPage();
    pdfDoc
      .font('Helvetica-Bold')
      .fontSize(14)
      .text('Batch Traceability Details', { align: 'center' })
      .moveDown();
    pdfDoc
      .fontSize(12)
      .font('Helvetica')

      .text(`Date: ${doc.registrationNumber}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Camplate Type: ${shortenedDateString}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Specified Cam Lift: ${shortenedTime}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Camplate Batch: ${doc.OECD}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Machine: ${shortenedTime}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Camplate MFD: ${doc.partsRecieved}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Roller 1: ${doc.partsRecieved}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Roller 2: ${doc.partsRecieved}`, {
        align: 'left'
      });
    pdfDoc
      .text(
        `Roller 3: ${doc.partsRecieved}`,
        {
          align: 'right',
          lineGap: 3
        },
        160,
        10
      )
      .text(`Roller 4: ${doc.partsRecieved}`, {
        align: 'right',
        lineGap: 3
      })
      .text(`Failure Hours: ${doc.partsRecieved}`, {
        align: 'right',
        lineGap: 3
      })
      .text(`Location BDS: ${doc.partsRecieved}`, {
        align: 'right',
        lineGap: 3
      })
      .text(`Investigation Details: ${doc.partsRecieved}`, {
        align: 'right',
        lineGap: 3
      })
      .text(`Date of closing: ${doc.partsRecieved}`, {
        align: 'right',
        lineGap: 3
      })
      .text(`Final State: ${doc.partsRecieved}`, {
        align: 'right',
        lineGap: 3
      })
      .moveDown()
      .moveDown();

    pdfDoc
      .font('Helvetica-Bold')
      .fontSize(14)
      .text('Camplate FMR Measurements Details', { align: 'center' })
      .moveDown();
    pdfDoc
      .fontSize(12)
      .font('Helvetica')
      .text(`Date: ${shortenedDateString}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Camplate taper #1: ${shortenedTime}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Camplate taper #2: ${doc.OECD}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Camplate taper #3: ${shortenedTime}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Camplate taper #4: ${doc.partsRecieved}`, {
        align: 'left',
        lineGap: 3
      });
    pdfDoc
      .text(
        `Camplate taper #5 : ${doc.partsRecieved}`,
        {
          align: 'right',
          lineGap: 3
        },
        340,
        10
      )
      .text(`Camplate taper #6: ${doc.partsRecieved}`, {
        align: 'right',
        lineGap: 3
      })
      .text(`Actual value: ${doc.partsRecieved}`, {
        align: 'right',
        lineGap: 3
      })
      .text(`Delta: ${doc.partsRecieved}`, {
        align: 'right',
        lineGap: 3
      })
      .text(`Remark: ${doc.partsRecieved}`, {
        align: 'right',
        lineGap: 3
      })
      .moveDown()
      .moveDown();

    pdfDoc
      .font('Helvetica-Bold')
      .fontSize(14)
      .text('Roller FMR Measurements', { align: 'center' })
      .moveDown()
      .moveDown();
    pdfDoc
      .fontSize(12)
      .font('Helvetica')

      .text(`Date: ${shortenedDateString}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Sphericity: ${doc.OECD}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Profile: ${shortenedTime}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Balliskiet: ${doc.partsRecieved}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Roundness: ${doc.partsRecieved}`, {
        align: 'left',
        lineGap: 3
      });

    pdfDoc
      .text(`Straightness: ${doc.partsRecieved}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Parallelity: ${doc.partsRecieved}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Actual value: ${doc.partsRecieved}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Delta: ${doc.partsRecieved}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Remark: ${doc.partsRecieved}`, {
        align: 'left',
        lineGap: 3
      })
      .moveDown()
      .moveDown();
    pdfDoc.addPage();
    // Set initial x and y positions
    let xPos = 40;
    let yPos = 310;

    // Loop through the images and place them side by side with gaps
    for (let i = 0; i < doc.Images.length; i++) {
      if (i % 3 === 0 && i !== 0) {
        xPos = 120; // Reset x position for the new row
        yPos += 180; // Update y position for the new row
      }

      pdfDoc
        .image(`public/img/mettalurgical/${doc.Images[i]}`, xPos, yPos, {
          scale: 0.1
        })
        .moveDown();

      xPos += 180; // Update x position for the next image with a gap of 60
    }

    pdfDoc.font('Helvetica-Bold').text('Images', { underline: true });

    res.setHeader('Content-type', 'application/pdf');
    res.setHeader(
      'Content-Disposition',
      'inline; filename="' + reportName + '"'
    );
    pdfDoc.pipe(fs.createWriteStream(reportPath));
    pdfDoc.pipe(res);

    pdfDoc.end();
  });
