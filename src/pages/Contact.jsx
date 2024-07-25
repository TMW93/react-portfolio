const usernameInput = document.getElementById('usernameInput');
const emailInput = document.getElementById('emailInput');
const messageInput = document.getElementById('messageInput');

function formSubmit() {
  if(!usernameInput || !emailInput || !messageInput) {
    return alert('All fields must be filled and valid.');
  }
}

export default function Contact() {
  return (
    <form id="messageForm">
      <div class="mb-3">
        <label for="usernameInput" className="form-label">Name</label>
        <input type="text" className="form-control" id="usernameInput"></input>
      </div>
      <div class="mb-3">
        <label for="emailInput" className="form-label">Email address</label>
        <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp"></input>
      </div>
      <div>
        <label for="messageInput" className="form-label">Message</label>
        <textarea className="form-control" id="messageInput" rows={3}></textarea>
      </div>
      <button type="submit" className="btn btn-primary" onClick={formSubmit}>Submit</button>
    </form>
  );
}