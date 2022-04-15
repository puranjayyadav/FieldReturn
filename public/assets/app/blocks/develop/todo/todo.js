const todos = {
  priority: 'all',
  items: [
    {
      title: 'Create the main page design',
      text: 'Eldest father can design tastes did joy settle. Roused future he ye an marked. Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking. ',
      date: '22.05.19',
      priority: 'high',
      done: false,
    },
    {
      title: 'Write to Sarah',
      text: 'Eldest father can design tastes did joy settle. Roused future he ye an marked. Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking. ',
      date: '22.05.19',
      priority: 'low',
      done: false,
    },
    {
      title: 'Make a mind-google-map',
      text: 'Eldest father can design tastes did joy settle. Roused future he ye an marked. Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking. ',
      date: '22.05.19',
      priority: 'medium',
      done: false,
    },
    {
      title: 'Write a text',
      text: 'Eldest father can design tastes did joy settle. Roused future he ye an marked. Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking. ',
      date: '22.05.19',
      priority: 'low',
      done: true,
    },
    {
      title: 'Make a blog post about marketing',
      text: 'Eldest father can design tastes did joy settle. Roused future he ye an marked. Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking. ',
      date: '22.05.19',
      priority: 'low',
      done: true,
    },
  ],
  done: null,
};

const render = () => {
  let g = true;
  const doneFilter = todo => {
    if(todos.done !== null) {
      return (todos.done && todo.done) || (!todos.done && !todo.done);
    }
    return true;
  };
  const priorityFilter = todo => todos.priority!=='all' ? todo.priority === todos.priority : true;
  const todos_html = todos.items.filter(doneFilter).filter(priorityFilter)
    .sort(a => a.done ? 1 : -1).map( x => {
    let str = '';
    if(x.done && g){
      g = false;
      str += '<div class="col-md-12"> <div class="todo-app__divider"> <div class="todo-app__divider-line"></div> <div class="todo-app__divider-title">Done</div> <div class="todo-app__divider-line"></div> </div> </div>';
    }
    return `${str}
        <div xs="12" class="${x.done ? 'todo__item-comleted' : ''}">
            <div class="card">
                <div class="todo__item card-body">
                    <label for="${x.title}" class="todo__label-checkbox">
                        <input id="${x.title}" type="checkbox" class="todo__complete-toggle" required="" ${x.done ? 'checked=""' : ''}>
                        <span class="checkbox-indicator"></span>
                    </label>
                <div class="todo__info">
                    <div class="todo__header">
                        <h3>${x.title}</h3>
                        <div class="todo__additional">
                            <p class="todo__due-date">Due date: ${x.date}</p>
                            <span class="todo__priority">Priority:</span>
                            <span class="todo__priority-indicator ${x.priority}"></span>
                        </div>
                    </div>
                <div class="todo__content">
                    <div class="todo__description">
                        ${x.text}
                    </div>
                    <button class="todo__delete-btn" type="button">
                        <svg class="mdi-icon " width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6,19C6,20.1 6.9,21 8,21H16C17.1,21 18,20.1 18,19V7H6V19M8.46,11.88L9.87,10.47L12,12.59L14.12,10.47L15.53,11.88L13.41,14L15.53,16.12L14.12,17.53L12,15.41L9.88,17.53L8.47,16.12L10.59,14L8.46,11.88M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
       </div>
    `;
  });
  $('.todo').html(todos_html.join(''));
  $('.checkbox-indicator').on('click', function(){
    const input = $(this).parent().find('input');
    input.prop('checked', !input.prop('checked'));
    const todo = todos.items.filter(x => x.title === input.attr('id'))[0];
    todo.done = !todo.done;
    render();
  });
  $(".todo__delete-btn").on('click', function(){
    todos.items.splice(
      todos.items.findIndex(x => x.title === $(this).parent().parent().parent().find('label').attr('for')),
      1
    );
    render();
  });

};
render();

$('.todo__filter-radio').on('click', function(){
  const value = $(this).attr('value');
  if(['low', 'medium', 'high', 'all'].includes(value)){
    todos.priority = value;
    render();
  } else {
    switch (value) {
      case 'all-tasks':
        todos.done = null;
        break;
      case 'pedning-tasks':
        todos.done = false;
        break;
      case 'completed-tasks':
        todos.done = true;
        break;
    }
    render();
  }
});

$(".without_search").chosen({disable_search_threshold: 10});
$(".todo-select").chosen();


$(".form__button-toolbar .btn-secondary").on('click', () => {
  $(this).find("input[type=text], textarea").val("");
  $('#add_todo').modal('hide');
});

$(".modal-content .form").on('submit', function(e){
  e.preventDefault();
  const items = $(this).serializeArray();
  todos.items.push({
    title: items[0].value,
    text: items[1].value,
    date: items[2].value,
    priority: items[3].value,
    done: false,
  });
  $('#add_todo').modal('hide');
  $(this).find("input[type=text], textarea").val("");
  render();
});
