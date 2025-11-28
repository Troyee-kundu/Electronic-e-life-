document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('scroll', () => {
        let navBar = document.querySelector('nav');
        if(window.scrollY >0){
            navBar.style.backgroundColor = '#f8f4f4ff';
            navBar.style.boxShadow = '0 10px 10px rgba(165, 194, 239, 0.5)';
        }
        else{
            navBar.style.backgroundColor = 'transparent' ;
            navBar.style.boxShadow = 'none';
        }
    });
}
)