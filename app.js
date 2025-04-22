// بيانات المنتجات
const products = [
    {
        id: 1,
        name: "هاتف سامسونج جديد",
        price: "45,000 دج",
        city: "الجزائر العاصمة",
        image: "https://via.placeholder.com/300"
    },
    {
        id: 2,
        name: "حاسوب محمول",
        price: "80,000 دج",
        city: "وهران",
        image: "https://via.placeholder.com/300"
    }
];

// عرض المنتجات
function displayProducts() {
    const productsContainer = document.querySelector('.products');
    
    products.forEach(product => {
        productsContainer.innerHTML += `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>السعر: ${product.price}</p>
                    <p>المدينة: ${product.city}</p>
                    <button class="btn" onclick="contactSeller(${product.id})">تواصل مع البائع</button>
                </div>
            </div>
        `;
    });
}

// اتصال بالبائع
function contactSeller(productId) {
    const product = products.find(p => p.id === productId);
    const phone = "213123456789"; // استبدال برقم حقيقي
    window.open(`https://wa.me/${phone}?text=مرحبًا، أنا مهتم بشراء ${product.name}`);
}

// تشغيل عند تحميل الصفحة
window.onload = displayProducts;