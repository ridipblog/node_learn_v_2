var socket = io.connect("")
var videoChatForm = document.getElementById("video-chat-form");
var videoChatRooms = document.getElementById("video-chat-room");
var joinBtn = document.getElementById("join");
var roomInput = document.getElementById("roomName");
var userVideo = document.getElementById("user-video");
var peerVideo = document.getElementById("peer-video");
var roomName = roomInput.value
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
var creator = false;
var rtcpeerconnections;
var userStream;
var iceServers = {
    iceServers: [
        { urls: "stun:stun.services.mozilla.com", },
        { urls: "stun1.l.google.com:19302" }
    ]
}
joinBtn.addEventListener("click", function () {
    if (roomName == "") {
        alert("Please Enter Room Name");
    }
    else {
        socket.emit("join", roomName);

    }
});

socket.on('created', function () {
    creator = true;
    navigator.getUserMedia(
        {
            audio: true,
            // video: true
            video: {
                width: 400,
                height: 400
            }
        },
        function (stream) {
            userStream = stream;
            videoChatForm.style = "display:none";
            userVideo.srcObject = stream;
            userVideo.onloadedmetadata = function (e) {
                userVideo.play();
            }
        },
        function (error) {
            console.log(error)
            alert("You Can't Access Video Stream");
        }
    );
});
socket.on('joined', function () {
    creator = false;
    navigator.getUserMedia(
        {
            audio: true,
            // video: true
            video: {
                width: 400,
                height: 400
            }
        },
        function (stream) {
            userStream = stream;
            videoChatForm.style = "display:none";
            userVideo.srcObject = stream;
            userVideo.onloadedmetadata = function (e) {
                userVideo.play();
            }
            socket.emit("ready", roomName);
        },
        function (error) {
            console.log(error)
            alert("You Can't Access Video Stream");
        }
    );
});
socket.on('full', function () {
    alert("Room Is Fulled ");
});




socket.on('ready', function () {
    if (creator) {
        rtcpeerconnections = new RTCPeerConnection(iceServers);
        rtcpeerconnections.onicecandidate = OnIcreCandidateFunction;
        rtcpeerconnections.ontrack = OnTrackFunction;
        rtcpeerconnections.addTrack(userStream.getTracks()[0], userStream.getTracks()[1]); //1 for audio 2 for video
    }
});
socket.on('candidate', function () {

})
socket.on('offer', function () {

})
socket.on('answer', function () {

})
// swipe candidate here 
function OnIcreCandidateFunction(event) {
    if (event.candidate) {
        socket.emit("candidate", event.candidate, roomName);
    }
}

// show peer-user video
function OnTrackFunction(event) {
    userVideo.srcObject = event.streams[0];
    userVideo.onloadedmetadata = function (e) {
        userVideo.play();
    }
}