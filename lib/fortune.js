let fortuneCookies=['ycc','laowang','pangjuan','huhao','kuanglong','qiliu'];

exports.getFortune=()=>{
    let idx=Math.floor(Math.random()*fortuneCookies.length);
    return fortuneCookies[idx];
};