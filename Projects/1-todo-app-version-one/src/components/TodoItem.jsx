function TodoItem({todoName,tododate}){

    return (
    <div className="container ">
      <div className="row kg-row ">
        <div className="col-6 items">
            {todoName}
          </div>

        <div className="col-4 items">
          {tododate}
        </div>
        <div className="col-2">
        <button type="button" class="btn btn-danger">delete</button>
        </div>
      </div>
      </div>
    )
}

export default TodoItem;