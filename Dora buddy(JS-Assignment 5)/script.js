const Users = [
    {
        userId: "USR00001",
        name: "Nobitha",
        profilePicture: "https://wallpapercave.com/wp/wp2312740.png",
        statusMessage: "Khana, pina , sona....",
        presence: 1
      },
      {
        userId: "USR00002",
        name: "Gian",
        profilePicture: "https://th.bing.com/th/id/R.7b2518cf582d86335434db95032bb50d?rik=gqmSZYHuk623kQ&riu=http%3a%2f%2fimg3.wikia.nocookie.net%2f__cb20140415073146%2fdoraemon%2fen%2fimages%2f4%2f41%2fGian.png&ehk=Wy3tVxUnl3Mn8oc9aH8J2weGHqrJZ41cmDOretwVcbg%3d&risl=&pid=ImgRaw&r=0",
        statusMessage: "Me hu giannnn....",
        presence: 2
      },
      {
        userId: "USR00003",
        name: "Shizuka",
        profilePicture: "https://i.pinimg.com/736x/d6/2d/d9/d62dd9d75a6333c20bb8bf22445fcaa8.jpg",
        statusMessage: "kitna pyari hu meh",
        presence: 3
      },
      {
        userId: "USR00004",
        name: "Sunio",
        profilePicture: "https://i.ytimg.com/vi/YjkS59Do6cc/maxresdefault.jpg",
        statusMessage: "Rich kid",
        presence: 1
      },
      {
        userId: "USR00005",
        name: "Doremii",
        profilePicture: "https://th.bing.com/th/id/OIP.eYFpu_6uKp8yvpalLBpfdgHaFS?pid=ImgDet&rs=1",
        statusMessage: "lemon cake...",
        presence: 4
      },
      {
        userId: "USR00006",
        name: "Dekisuki",
        profilePicture: "https://th.bing.com/th/id/OIP.u7arZ0PJdU79jh7sF-fJMQHaEH?pid=ImgDet&rs=1",
        statusMessage: "intelligent boy",
        presence: 2
      },
      {
        userId: "USR00007",
        name: "Teacher",
        profilePicture: "https://vignette2.wikia.nocookie.net/doraemon/images/e/e7/HAYGP_185.JPG/revision/latest?cb=20151002044104&path-prefix=en",
        statusMessage: "The things I do to teach.",
        presence: 1
      },
      {
        userId: "USR00008",
        name: "tamako",
        profilePicture: "https://vignette2.wikia.nocookie.net/doraemon/images/c/c0/Tamako_2008_movie.PNG/revision/latest?cb=20150902124108&path-prefix=en",
        statusMessage: "nobithha ka mom.",
        presence: 3
      },
      {
        userId: "USR00009",
        name: "shinchan",
        profilePicture: "https://th.bing.com/th/id/R.5be26fde42d82bad3ba77ca7940c9dcd?rik=IkPJ7o2stZxw%2bQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fwp1812467.jpg&ehk=gscm0%2fJMFCqYLEvGgWb6iXpmZ%2b8%2ffLliC5Eukc%2bCV%2bQ%3d&risl=&pid=ImgRaw&r=0",
        statusMessage: "kya ,shock hogaya!!!",
        presence: 4
      },
      {
        userId: "USR00010",
        name: "gaiko",
        profilePicture: "https://th.bing.com/th/id/OIP.HQWhXBHUfH8VmWBRcr01MwHaEJ?pid=ImgDet&rs=1",
        statusMessage: "I always had blue eyes!",
        presence: 2
      }
];

localStorage.setItem('users', JSON.stringify(Users));

var presenceColor = [ 'green', 'red', 'yellow', 'grey'];

const userListCreation =()=>{
    var users = JSON.parse(localStorage.getItem('users'));

    if (!users) {
        // Data not available in local storage, store the provided JSON data
        localStorage.setItem('users', JSON.stringify(Users));
        users = Users;
      }
    for(itr in users){
        // console.log(users[itr]);
       var user=users[itr];
       var userListDiv = document.getElementById("userList")
       var userDiv = document.createElement('div');
       userDiv.className='userdiv';
      var temp1 = document.createElement('div');
       var userImg = document.createElement('img');
       userImg.setAttribute('data-userid', user.userId);
       userImg.className = ` profile-picture ${presenceColor[user.presence -1]}`;
       userImg.src = user.profilePicture;
       temp1.appendChild(userImg);
       temp1.style.display='flex';
       var userDetailDiv = document.createElement('div');
       userDetailDiv.className = 'UserDetail';
      var Name = document.createElement('h4');
       Name.innerHTML = user.name;
       var statusM = document.createElement('p');
  statusM.innerHTML = user.statusMessage;
       userDetailDiv.appendChild(Name);
       userDetailDiv.appendChild(statusM);
       temp1.appendChild(userDetailDiv);
       userDiv.appendChild(temp1);
       var optionIcon1 = document.createElement('i');
       optionIcon1.className = 'fa-solid fa-ellipsis-vertical icon';
      
       var tempdiv = document.createElement('div');
       tempdiv.style.display='flex';
        // tempdiv.appendChild(userDiv);
        tempdiv.appendChild(optionIcon1);
        userDiv.appendChild(tempdiv);
        userListDiv.appendChild(userDiv);
    }
}



// pass the parameters directly 
// like updatePresence({"userId"="USR00004","presence"=3});


// or change the object status to other name 

// like       obj={"userId"="USR00004","presence"=3}
//           updatePresence(obj)

const updatePresence = (stat) => {
  var users = JSON.parse(localStorage.getItem('users'));
  users.forEach((user) => {
    if (user.userId === stat.userId) {
      user.presence = stat.presence;
      console.log(`The user ${stat.userId} presence has been updated to ${presenceColor[stat.presence - 1]}.`);
    }
  });
  localStorage.setItem('users', JSON.stringify(users));
  var userImgElement = document.querySelector(`[data-userid="${stat.userId}"]`);
  if(userImgElement){
  userImgElement.style.borderColor = presenceColor[stat.presence - 1];
  }else{
    console.log('change the object name or rewrite updatePresence( { userId: "USR00003", presence: 2 })')
  }
};

const updateStatusMessage = (msg) => {
  var users = JSON.parse(localStorage.getItem('users'));
  var cnt=0;
  users.forEach((user) => {
    
    if (user.userId === msg.userId) {
      user.statusMessage = msg.statusMessage;
      var userDivs = document.getElementsByClassName('userdiv');
      var userDiv = userDivs[cnt];
      var userDetail = userDiv.querySelector('.UserDetail');
      var sMessage = userDetail.querySelector('p');
      sMessage.innerHTML = user.statusMessage;
      console.log(`The status message for user ${msg.userId} has been updated.`);
    }
    cnt++;
  });
  localStorage.setItem('users', JSON.stringify(users));
};





const addUser = (user) => {
  var users = JSON.parse(localStorage.getItem('users'));

  users.unshift(user);
  var userImgElement = document.querySelector(`[data-userid="${user.userId}"]`);
  userImgElement.style.borderColor = presenceColor[user.presence];

  localStorage.setItem('users', JSON.stringify(users));

  var userListDiv = document.getElementById("userList");
  var userDiv = document.createElement('div');
  userDiv.className = 'userdiv';
  
  var temp1 = document.createElement('div');
  var userImg = document.createElement('img');
  userImg.setAttribute('data-userid', user.userId);
  userImg.className = ` profile-picture ${presenceColor[user.presence]}`;
  userImg.src = user.profilePicture;
  temp1.appendChild(userImg);
  temp1.style.display = 'flex';

  var userDetailDiv = document.createElement('div');
  userDetailDiv.className = 'UserDetail';
  var Name = document.createElement('h4');
  Name.innerHTML = user.name;
  var statusM = document.createElement('p');
  statusM.innerHTML = user.statusMessage;
  userDetailDiv.appendChild(Name);
  userDetailDiv.appendChild(statusM);
  temp1.appendChild(userDetailDiv);
  userDiv.appendChild(temp1);

  var optionIcon1 = document.createElement('i');
  optionIcon1.className = 'fa-solid fa-ellipsis-vertical icon';
  
  var tempdiv = document.createElement('div');
  tempdiv.style.display = 'flex';
  tempdiv.appendChild(optionIcon1);
  userDiv.appendChild(tempdiv);

  userListDiv.insertBefore(userDiv, userListDiv.firstChild);

  console.log(`The user ${user.userId} has been added.`);
};



const deleteUser = (userId) => {
  var users = JSON.parse(localStorage.getItem('users'));
  var index = users.findIndex((user) => user.userId === userId);

  if (index !== -1) {
    users.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(users));
    var userDiv = document.querySelector(`[data-userid="${userId}"]`).parentNode.parentNode;
    userDiv.remove();
    console.log(`The user ${userId} has been deleted.`);
  }
  else {
    console.log(`User with ID ${userId} not found.`);
  }
};





