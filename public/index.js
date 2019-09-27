W$TYPE={ $name:'Page', 
  clear: function(el,v){
    w$query('div.Issue',el,function(e){ e.style.width=null; });
  },
};
W$TYPE={ $name:'Issue',  
  toDate: function(el,v){
    return v ? v.replace('T',' ') :'';
  },
  issueOpen$arg:"id,open:1",
  issueOpen: function(el,ev,arg){
    if(this.children){
      el.style.width=el.offsetWidth;
      w$weave(el,'',{children:null});
    }else{
      W$CALL("!getIssue",arg,function(data){
        el.style.width=null;
        w$weave(el,'',data.issues[0]);
      });
    }
  },
};

W$START="!getIssue"; W$DATA=w$getParameters();
