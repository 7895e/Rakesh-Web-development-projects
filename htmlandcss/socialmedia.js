//settings Menu
var settingsMenu= document.querySelector(".settings-menu");

var darkbtn = document.getElementById("dark-btn");
darkbtn.onclick=function(){
    darkbtn.classList.toggle("dark-theme");
    document.body.classList.toggle("darkbackground-theme");
    
if(localStorage.getItem("theme")==="light"){
    
    localStorage.setItem("theme","dark");
}
else{
    localStorage.setItem("theme","light");
}
}


if(localStorage.getItem("theme")==="light"){
    darkbtn.classList.remove("dark-theme");
    document.body.classList.remove("darkbackground-theme");
}

else if(localStorage.getItem("theme")==="dark"){
    darkbtn.classList.add("dark-theme");
    document.body.classList.add("darkbackground-theme");
}
else{

    localStorage.setItem("theme","light");
}

function settingsMenuToggle(){

    settingsMenu.classList.toggle("settings-menu-height")
}


var nameToImage = {
  "Alison": "./assets/member-1.png",
  "Jackson": "./assets/member-2.png",
  "Joe": "./assets/member-4.png",
  // Add more names and corresponding image paths as needed
};


var nameToImage = {
  "Alison": "./assets/member-1.png",
  "Jackson": "./assets/member-2.png",
  "Joe": "./assets/member-4.png",
  // Add more names and corresponding image paths as needed
};
var searchTextToImage = {
  "Latest News": "./assets/news.png",
  "Friends": "./assets/friends.png",
  "Group": "./assets/group.png",
  "Market Place": "./assets/marketplace.png",
  "Watch": "./assets/watch.png",
  "See More": ""
};
//Search Functionality
function filterNames() {
  var searchBox = document.getElementById("searchInput").value.trim().toLowerCase();
  if (searchBox === '') {
    var highlightedElements = document.querySelectorAll('.highlight');
    highlightedElements.forEach(function(element) {
      element.classList.remove('highlight');
    });
    return;
  }
  if (searchBox.length < 3) {
    return; // Exit the function if the search query is less than 3 characters
  }

  // Reset previous highlighting only if elements have been previously highlighted
  var highlightedElements = document.querySelectorAll('.highlight');
  if (highlightedElements.length > 0) {
    highlightedElements.forEach(function(element) {
      element.classList.remove('highlight');
    });
  }

  for (var name in searchTextToImage) {
    if (name.toLowerCase().includes(searchBox)) {
      var matchingFriends = document.querySelectorAll('.imp-links a');
      matchingFriends.forEach(function(friend) {
        if (friend.textContent.toLowerCase().includes(name.toLowerCase())) {
          friend.classList.add('highlight');
          // Highlight the associated image
          var associatedImage = friend.parentElement.querySelector('img');
          if (associatedImage) {
            associatedImage.classList.add('highlight');
          }
        }
      });
    }
  }
  for (var name in nameToImage) {
    if (name.toLowerCase().includes(searchBox)) {
      var matchingFriends = document.querySelectorAll('.online-friends p');
      matchingFriends.forEach(function(friend) {
        if (friend.textContent.toLowerCase().includes(name.toLowerCase())) {
          friend.classList.add('highlight');
          // Highlight the associated image
          var associatedImage = friend.parentElement.querySelector('img');
          if (associatedImage) {
            associatedImage.classList.add('highlight');
          }
        }
      });
    }
  }
}

  // In
  
// Add event listener to the search input to trigger filtering
document.getElementById('searchInput').addEventListener('input', filterNames);

document.addEventListener('click', function(event) {
  // Check if the clicked element is a comment icon
  if (event.target.classList.contains('fa-comment')) {
    // Get the parent image wrapper
    const imageWrapper = event.target.closest('.image-wrapper');
    
    // Find the comment box within the image wrapper
    const commentBox = imageWrapper.querySelector('.commentDiv');

    // Toggle the visibility of the comment box
    commentBox.classList.toggle('visible');
  }
});

  // Check if the clicked element is a comment icon
  document.addEventListener('click', function(event) {
    // Check if the clicked element is a thumbs-up icon
    if (event.target.classList.contains('fa-thumbs-up')) {
      // Toggle the color class of the thumbs-up icon
      event.target.classList.toggle('liked','fa-thumbs-up');
    

  
  }
  });
  

 
  
// JavaScript code (socialmedia.js)
function handleFileInputClick() {
  document.getElementById('fileInput').click();
}

document.getElementById('fileInput').addEventListener('change', function(event) {
  const files = event.target.files;
  const mainContent = document.querySelector(".main-content");

  // Loop through selected files
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const reader = new FileReader();

    // Closure to capture the file information
    reader.onload = (function(theFile) {
      return function(e) {
        // Create a new post-container for each set of uploaded images
        const postContainer = document.createElement('div');
        postContainer.classList.add('post-container');

        // Create container for each image
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add('image-wrapper');

        //Create epsilon icon element
        
        // Create image element
        const img = document.createElement('img');
        img.src = e.target.result;

        
        imageWrapper.appendChild(img);
        
        // Create like, comment, and share icons dynamically
        const actionsContainer = document.createElement('div');
        
        actionsContainer.classList.add('image-actions');

        const likeIcon = document.createElement('i');
        likeIcon.classList.add('far', 'fa-thumbs-up');
        actionsContainer.appendChild(likeIcon);
        
        const thumbsUpCountSpan = document.createElement('span');
        thumbsUpCountSpan.id = 'thumbsUpCount';
        thumbsUpCountSpan.textContent = '0'; // Initial like count
        thumbsUpCountSpan.classList.add('likescount');
        actionsContainer.appendChild(thumbsUpCountSpan);

        const commentIcon = document.createElement('i');
        commentIcon.classList.add('far', 'fa-comment');
        actionsContainer.appendChild(commentIcon);
        

        const commentSpan = document.createElement('span');
        commentSpan.id = 'commentsCount';
        commentSpan.textContent = '0'; // Initial like count
        commentSpan.classList.add('comments');
        actionsContainer.appendChild(commentSpan);

        const shareIcon = document.createElement('i');
        shareIcon.classList.add('fas', 'fa-share');
        actionsContainer.appendChild(shareIcon);
        
        // Create the comment input field and container
        const commentBox = document.createElement('textarea');
        commentBox.setAttribute('type', 'text');
        commentBox.setAttribute('placeholder', 'Write a comment...');
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('commentDiv');
        
        commentBox.rows = 2;
        
        commentBox.classList.add('textarea');
        commentDiv.appendChild(commentBox);


        imageWrapper.appendChild(actionsContainer);
        imageWrapper.appendChild(commentDiv);

        postContainer.appendChild(imageWrapper);
        mainContent.appendChild(postContainer);
      };
    })(file);

    // Read in the image file as a data URL
    reader.readAsDataURL(file);
  }

  // Clear the input field after handling files
  event.target.value = '';
});



// Event delegation for handling input events on textarea elements
document.addEventListener('input', function(event) {
  console.log("Input event triggered!");
  // Check if the input event is triggered by a textarea with the .textarea class
  if (event.target.classList.contains('textarea')) {
    // Get the parent post container
    const imageWrapper = event.target.closest('.image-wrapper');
    
    console.log("Image wrapper:", imageWrapper);

    // Find the comment count element within the post container
    const commentsCountElement = imageWrapper.querySelector('.comments');
    const commentDiv = imageWrapper.querySelector('.commentDiv');

    console.log("Comments count element:", commentsCountElement);

    // Count the number of comments by counting the non-empty textarea elements within the post container
    const commentsCount = Array.from(imageWrapper.querySelectorAll('.textarea')).filter(function(textarea) {
      return textarea.value.trim() !== '';
    }).length;

    console.log("Comments count:", commentsCount);

    // Update the comment count element with the new comments count
    if (commentsCountElement) {
      commentsCountElement.textContent = commentsCount;

      // Toggle visibility of commentDiv based on textarea content
      if (commentsCount < 0) {
        commentDiv.style.display = 'block';
      } else if(commentsCount > 0){
        commentDiv.style.display = 'block';
      }

      // Store the updated comment count in localStorage if needed
      localStorage.setItem("commentsCount", commentsCount);
    } else {
      console.error("Comments count element not found.");
    }
  }
});

let notificationCount = localStorage.getItem("notificationCount");
let notoficationSpan = document.getElementById('notificationCount');
notoficationSpan.textContent = "";

document.querySelector('.main-content').addEventListener('click', function(event) {
  localStorage.removeItem("notificationCount");
  // Check if the clicked element is a thumbs-up icon
  if (event.target.classList.contains('fa-thumbs-up')) {
      // Toggle the color class of the thumbs-up icon
      event.target.classList.toggle('far','fa-thumbs-up ');

      // Find the thumbs-up count element associated with this icon
      var thumbsUpCountElement = event.target.parentElement.querySelector('.likescount');

      // Get the current like count from the thumbs-up count element
      var likeCount = parseInt(thumbsUpCountElement.textContent);
      localStorage.removeItem("notificationCount");
      // Update the like count based on whether the icon is liked or not
      if (event.target.classList.contains('liked')) {
          likeCount++; // Increment the count if the icon is liked
          notificationCount++; // Increment the notification count
          notoficationSpan.textContent = notificationCount;
          notoficationSpan.classList.add('notification-count');
      } else {
          likeCount = Math.max(likeCount - 1, 0); // Decrement the count, ensuring it doesn't go below 0
          notificationCount=0;
         
      }
      if(notificationCount === 0) {
        notoficationSpan.classList.remove('notification-count');
       
      }

      // Update the text content of the thumbs-up count element with the new like count
      thumbsUpCountElement.textContent = likeCount;
      if (notificationCount > 0) {
        notificationSpan.textContent = notificationCount;
        notificationSpan.classList.add('notification-count');
    } else {
        notificationSpan.textContent = "";
        notificationSpan.classList.remove('notification-count');
    }

      // Store the updated like count and notification count in localStorage
      localStorage.setItem("likeCount", likeCount);
      localStorage.setItem("notificationCount", notificationCount);
  }
});


//upload videos
function uploadVideos() {
  document.getElementById('videoInput').click();
}
const videoInput = document.getElementById('videoInput');
if (videoInput) {
  videoInput.addEventListener('change', function(event) {
    const files = event.target.files;
    const mainContent = document.querySelector(".main-content");

    // Loop through selected files
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      // Closure to capture the file information
      reader.onload = (function(theFile) {
        return function(e) {
          // Log to verify that the file was read correctly
          console.log("File read:", theFile.name);

          // Create a new video element
          const video = document.createElement('video');
          video.src = e.target.result;
          video.controls = true; // Enable video controls
          video.autoplay = true; // Autoplay the video

          // Log to verify the video element creation
          console.log("Video element:", video);

          // Create a container for the video
          const videoContainer = document.createElement('div');
          videoContainer.classList.add('video-container');
          videoContainer.appendChild(video);

          // Log to verify the video container creation
          console.log("Video container:", videoContainer);

          // Append the video container to the main content
          mainContent.appendChild(videoContainer);

          // Log to indicate that the video has been added to the page
          console.log("Video added to page.");
        };
      })(file);

      // Read the video file as a data URL
      reader.readAsDataURL(file);
    }

    // Clear the input field after handling files
    event.target.value = '';
  });
} else {
  console.error("Video input element not found.");
}


