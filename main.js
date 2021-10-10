new Vue({
    el: '#app',
    data: {
        keyword: '',
        users: [
            {
                id: 1,
                name: '佐藤',
            },
            {
                id: 2,
                name: '山田',
            },
            {
                id: 3,
                name: '鈴木',
            },
            {
                id: 4,
                name: '田中',
            },
        ]
    },
    computed: {
        filteredUsers: function(){
            let users = [];
                for(let i in this.users) {
                    let user = this.users[i];
                    if(user.name.indexOf(this.keyword) !== -1) {
                        users.push(user);
                    }
                }
                return users;
        }
    }
});