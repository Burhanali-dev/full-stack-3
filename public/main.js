var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var thumbDown = document.getElementsByClassName("fa-thumbs-down");
var trash = document.getElementsByClassName("fa-trash");
var input = document.getElementById("editable");

input.addEventListener("keypress", function(event) {
    //bench press	2	3	15 mins
    // exercise
    if (event.key === "Enter") {
      let text = document.getElementById('editable').value
  
      fetch('create', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          'text': text
        })
      }).then(response => {
        if (response.ok) console.log('text created')
        window.location.reload()
      })
    }
})


function deleteE(element) {
  //bench press	2	3	15 mins
  // exercise
  let text = element.closest('li').innerText
  
  console.log(text)

  fetch('delete', {
    method: 'delete',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'text': text,
       })
  }).then(response => {
    if (response.ok) console.log('text updated')
    window.location.reload()
  })

}


