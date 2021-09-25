var theDark = document.querySelector('#the-dark') ?? document.createElement('link');
theDark.setAttribute('rel', 'stylesheet');
theDark.id = 'the-dark';
theDark.href='{-URL-}';
if (!document.body.contains(theDark)) document.body.appendChild(theDark);
document.body.classList.toggle("dark");