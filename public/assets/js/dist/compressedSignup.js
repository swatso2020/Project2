$(document).ready(()=>{function a(a,c){console.log(a,c),$.post("/api/signup",{email:a,password:c}).then(()=>{window.location.replace("/members")}).catch(b)}function b(a){$("#alert .msg").text(a.responseJSON),$("#alert").fadeIn(500)}const c=$("form.signup"),d=$("input#email-input"),e=$("input#password-input");c.on("submit",b=>{b.preventDefault();const c={email:d.val().trim(),password:e.val().trim()};c.email&&c.password&&(a(c.email,c.password),d.val(""),e.val(""))})});