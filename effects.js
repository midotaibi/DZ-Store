// وضع ليلي
document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const darkModeCSS = document.getElementById('dark-mode-css');
    darkModeCSS.disabled = !darkModeCSS.disabled;
    
    // حفظ التفضيل في localStorage
    localStorage.setItem('darkMode', darkModeCSS.disabled ? 'off' : 'on');
});

// تأثير الهولوجرام
document.getElementById('hologram-toggle').addEventListener('click', function() {
    document.querySelectorAll('.product').forEach(product => {
        product.classList.toggle('hologram-active');
    });
    
    // حفظ التفضيل
    localStorage.setItem('hologramEffect', 
        document.querySelector('.product').classList.contains('hologram-active') ? 'on' : 'off'
    );
});

// تحميل التفضيلات عند البدء
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('darkMode') === 'on') {
        document.getElementById('dark-mode-toggle').click();
    }
    
    if (localStorage.getItem('hologramEffect') === 'on') {
        document.getElementById('hologram-toggle').click();
    }
    
    // إضافة تأثير ظهور تدريجي للمنتجات
    document.querySelectorAll('.product').forEach((product, index) => {
        product.style.animationDelay = `${index * 0.1}s`;
        product.classList.add('animated', 'fadeIn');
    });
});