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
      .text(`Date: ${doc.date1}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Pump Part Number: ${doc.PartName1}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Serial Number (with MFD): ${doc.chararcteristic1}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`LAC: ${doc.specValue1}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`eJC Number: ${doc.unit1}`, {
        align: 'left',
        lineGap: 3
      });
    pdfDoc
      .text(
        `Dealer : ${doc.max1}`,
        {
          align: 'right',
          lineGap: 3
        },
        340,
        10
      )
      .text(`Application: ${doc.min1}`, {
        align: 'right',
        lineGap: 3
      })
      .text(`Voice of Customer: ${doc.actualValue1}`, {
        align: 'right',
        lineGap: 3
      })
      .text(`Failure Hours: ${doc.delta1}`, {
        align: 'right',
        lineGap: 3
      })
      .text(`Seal condition: ${doc.remark1}`, {
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

      .text(`Date: ${doc.date2}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Fuel Related Issues: ${doc.PartName2}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Hitting mark on timer plate: ${doc.specValue2}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Blueish mark on camplate/rollers: ${doc.unit2}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Pitting on camplate ( Inner edge/outer edge): ${doc.max2}`, {
        align: 'left',
        lineGap: 3
      });

    pdfDoc
      .text(`Number of camplate lobes damaged: ${doc.min2}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Number of roller damaged: ${doc.actualValue2}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Rubbing marks - cross disk: ${doc.delta2}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Delta: ${doc.remark2}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`EXTRAAAAs ${doc.partsRecieved}`, {
        align: 'left',
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

      .text(`Date: ${doc.date3}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Camplate Type: ${doc.PartName3}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Specified Cam Lift: ${doc.characteristic3}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Camplate Batch: ${doc.specValue3}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Machine: ${doc.unit3}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Camplate MFD: ${doc.max3}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Roller 1: ${doc.min3}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Roller 2: ${doc.delta3}`, {
        align: 'left'
      });
    pdfDoc
      .text(
        `Roller 3: ${doc.remark3}`,
        {
          align: 'right',
          lineGap: 3
        },
        160,
        10
      )
      .moveDown()
      .moveDown(4);

    pdfDoc
      .font('Helvetica-Bold')
      .fontSize(14)
      .text('Camplate FMR Measurements Details', { align: 'center' })
      .moveDown();
    pdfDoc
      .fontSize(12)
      .font('Helvetica')
      .text(`Date: ${doc.date4}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Camplate taper #1: ${doc.PartName4}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Camplate taper #2: ${doc.characteristic4}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Camplate taper #3: ${doc.specValue4}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Camplate taper #4: ${doc.unit4}`, {
        align: 'left',
        lineGap: 3
      });
    pdfDoc
      .text(
        `Camplate taper #5 : ${doc.max4}`,
        {
          align: 'right',
          lineGap: 3
        },
        300,
        10
      )
      .text(`Camplate taper #6: ${doc.min4}`, {
        align: 'right',
        lineGap: 3
      })
      .text(`Actual value: ${doc.actualValue4}`, {
        align: 'right',
        lineGap: 3
      })
      .text(`Delta: ${doc.delta4}`, {
        align: 'right',
        lineGap: 3
      })
      .text(`Remark: ${doc.remark4}`, {
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

      .text(`Date: ${doc.date5}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Sphericity: ${doc.PartName5}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Profile: ${doc.characteristic5}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Balliskiet: ${doc.specValue5}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Roundness: ${doc.unit5}`, {
        align: 'left',
        lineGap: 3
      });

    pdfDoc
      .text(`Straightness: ${doc.max5}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Parallelity: ${doc.min5}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Actual value: ${doc.actualValue5}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Delta: ${doc.delta5}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Remark: ${doc.remark5}`, {
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
      .moveDown(2);
    pdfDoc
      .fontSize(12)
      .font('Helvetica')

      .text(`Date: ${doc.date6}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`S1 center face: ${doc.PartName6}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Perpendicularity 1: ${doc.characteristic6}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Perpendicularity 2: ${doc.specValue6}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`S2 center face: ${doc.unit6}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Perpendicularity 1: ${doc.max6}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Perpendicularity 2: ${doc.min6}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`S3 center face: ${doc.actualValue6}`, {
        align: 'left'
      });
    pdfDoc
      .text(
        `Perpendicularity 2: ${doc.remark6}`,
        {
          align: 'right',
          lineGap: 3
        },
        160,
        10
      )
      .text(`S3 center face: ${doc.feedgroving}`, {
        align: 'right',
        lineGap: 3
      })
      .text(`Perpendicularity 1: ${doc.RollerRing}`, {
        align: 'right',
        lineGap: 3
      })
      .text(`Perpendicularity 2: ${doc.SpringClass}`, {
        align: 'right',
        lineGap: 3
      })
      .text(`Hyd. Head KOT: ${doc.HydHead}`, {
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
      .text(`Date: ${doc.date7}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Camplate Hardness: ${doc.PartName7}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Camplate: ${doc.characteristic7}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Roller residual stress: ${doc.specValue7}`, {
        align: 'left',
        lineGap: 3
      })
      .text(`Roller Hardness: ${doc.unit7}`, {
        align: 'left',
        lineGap: 3
      });
    pdfDoc
      .text(
        `Max: ${doc.max7}`,
        {
          align: 'right',
          lineGap: 3
        },
        340,
        10
      )
      .text(`Min: ${doc.min7}`, {
        align: 'right',
        lineGap: 3
      })
      .text(`Actual value: ${doc.actualValue7}`, {
        align: 'right',
        lineGap: 3
      })
      .text(`Delta: ${doc.delta7}`, {
        align: 'right',
        lineGap: 3
      })
      .text(`Remark: ${doc.remark7}`, {
        align: 'right',
        lineGap: 3
      })
      .moveDown()
      .moveDown();

    pdfDoc.addPage();
    console.log(doc.Images);
    if (doc.Images && Array.isArray(doc.Images)) {
      // Set initial x and y positions
      let xPos = 40;
      let yPos = 310;

      // Loop through the images and place them side by side with gaps
      for (let i = 0; i < doc.Images.length; i++) {
        if (doc.Images[i] && doc.Images[i].trim() !== 'undefined') {
          if (i % 3 === 0 && i !== 0) {
            xPos = 120; // Reset x position for the new row
            yPos += 180; // Update y position for the new row
          }

          pdfDoc
            .image(`public/img/mettalurgical/${doc.Images[i]}`, xPos, yPos, {
              scale: 0.1
            })
            .moveDown();

          xPos += 150; // Update x position for the next image with a gap of 30
        }
      }
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
