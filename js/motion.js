// Efectos de movimiento adicionales
document.addEventListener('DOMContentLoaded', function() {
    const serviceItems = document.querySelectorAll('.cancha-item, .servicio-item');
    
    serviceItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Efecto de aparición para las tarifas
    const priceItems = document.querySelectorAll('.tarifa-item');
    
    priceItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.2}s`;
    });
    
    // Efecto de hover para las imágenes
    const images = document.querySelectorAll('.cancha-item img, .servicio-item img');
    
    images.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});