export const defaults={
    isLoggedIn: localStorage.getItem("token")!==null?true:false
};

export const resolvers={
    Mutation:{
        logUserIn:(_,{toKen},{cache})=>{
            localStorage.setItem("toKen",toKen);
            cache.writeData({
                data:{
                    isLoggedIn:true
                }
            });
            return null;
        },
        logUserOut:(_,__,{cache})=>{
            localStorage.removeItem("toKen");
            window.location.reload();
            return null;
        }
    }
};