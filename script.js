function login()
{

  let a = username.value
  let b = password.value
  if (a =="abc" && b =="123")
  {
    window.open('Home.html');
    document.getElementById ("compiler").style.display="block";
  }
  else
    window.open('loginfail.html')
}