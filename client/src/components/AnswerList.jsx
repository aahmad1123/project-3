function AnswerList(props){
    return(
        <div>
           <div className="card" style={{width: "35rem"}}>
           <div className="card-body">
           <h5 className="card-title">{props.answer}</h5>
           <h6 class="card-subtitle mb-2 text-muted">{props.username}</h6>
  </div>
</div>
        </div>
    )
};

export default AnswerList;