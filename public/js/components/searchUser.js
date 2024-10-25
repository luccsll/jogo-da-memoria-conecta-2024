function searchUser(id) {
    var url = 'http://localhost/jogo-da-memoria-conecta-2024/backend/database.txt';

    fetch(url)
        .then(response => response.text())
        .then(data => {
            var formatJSON = data.slice(0, -1);
            formatJSON = '[' + formatJSON + ']';
            data = JSON.parse(formatJSON);
            
            for(let content of data){
                if(id == content['id']){
                    return [{
                        "name": content['name'],
                        "theme": content['theme'], 
                        "clicks": content['clicks'], 
                        "time": content['time']
                    }]
                }

                break
            }
        })
}

var id = '00445154'
searchUser(id)

export default searchUser