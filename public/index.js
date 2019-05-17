W$TYPE={ $name:'Issue',  
  toDate: function(el,v){
    return v ? v.replace('T',' ') :'';
  },
  issueOpen$arg:"id,open:1",
  issueOpen: function(el,ev,arg){
    if(this.children){
      w$weave(el,'',{children:null});
    }else{
      W$CALL("!getIssue",arg,function(data){
        w$weave(el,'',data.issues[0]);
      });
    }
  },
}

W$START="!getIssue"; W$DATA=w$getParameters();
