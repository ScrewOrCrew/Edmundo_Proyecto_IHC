(function() {
    // DEFINICIÓN DEL SIDEBAR
    const sidebarHTML = `
        <nav class="sidebar">
            <div class="sidebar-header">
                <div class="sidebar-logo">
                    <img src="IMÁGENES PARA EL AIMSS/imss-seeklogo.png" alt="IMSS" style="width: 40px; height: auto;">
                </div>
                <div class="sidebar-title">IMSS Bienestar</div>
            </div>
            
            <div class="sidebar-nav">
                <a href="05-inicio.html" class="sidebar-item" data-page="05">
                    <span class="sidebar-icon"><i class="material-icons-round">dashboard</i></span>
                    <span class="sidebar-text">Inicio</span>
                </a>
                <a href="06-citas.html" class="sidebar-item" data-page="06">
                    <span class="sidebar-icon"><i class="material-icons-round">calendar_today</i></span>
                    <span class="sidebar-text">Citas</span>
                </a>
                <a href="12-directorio.html" class="sidebar-item" data-page="12">
                    <span class="sidebar-icon"><i class="material-icons-round">medical_services</i></span>
                    <span class="sidebar-text">Directorio</span>
                </a>
                <a href="07-vigencia.html" class="sidebar-item" data-page="07">
                    <span class="sidebar-icon"><i class="material-icons-round">verified</i></span>
                    <span class="sidebar-text">Vigencia</span>
                </a>
                <a href="08-otros.html" class="sidebar-item" data-page="08">
                    <span class="sidebar-icon"><i class="material-icons-round">description</i></span>
                    <span class="sidebar-text">Trámites</span>
                </a>
                <a href="10-tarjeta-digital.html" class="sidebar-item" data-page="10">
                    <span class="sidebar-icon"><i class="material-icons-round">qr_code</i></span>
                    <span class="sidebar-text">Tarjeta</span>
                </a>
                
                <div style="height: 1px; background: #e0e0e0; margin: 10px 20px;"></div>

                <a href="09-configuracion.html" class="sidebar-item" data-page="09">
                    <span class="sidebar-icon"><i class="material-icons-round">settings</i></span>
                    <span class="sidebar-text">Ajustes</span>
                </a>
                <a href="02-login.html" class="sidebar-item">
                    <span class="sidebar-icon"><i class="material-icons-round">logout</i></span>
                    <span class="sidebar-text">Salir</span>
                </a>
            </div>
        </nav>
        <button class="menu-toggle" style="position:fixed; bottom:20px; right:20px; z-index:2000; background:#006657; color:white; border:none; border-radius:50%; width:50px; height:50px; font-size:24px; box-shadow:0 4px 10px rgba(0,0,0,0.3); cursor:pointer; display:none;">☰</button>
    `;

    // INYECTAR SIDEBAR AL CARGAR
    document.addEventListener('DOMContentLoaded', function() {
        const pageContainer = document.querySelector('.page-container');
        if (pageContainer && !document.querySelector('.sidebar')) {
            pageContainer.insertAdjacentHTML('afterbegin', sidebarHTML);
        }

        // Marcar link activo
        const currentPage = window.location.pathname.split('/').pop();
        document.querySelectorAll('.sidebar-item').forEach(item => {
            if(item.dataset.page && currentPage.startsWith(item.dataset.page)) {
                item.classList.add('active');
            }
        });

        // Botón móvil
        const toggleBtn = document.querySelector('.menu-toggle');
        if(toggleBtn) {
            if(window.innerWidth <= 768) toggleBtn.style.display = 'block';
            toggleBtn.addEventListener('click', () => {
                const sidebar = document.querySelector('.sidebar');
                sidebar.style.width = sidebar.style.width === '250px' ? '0' : '250px';
            });
        }
        
        aplicarPreferencias();
    });

    // FUNCIONES GLOBALES
    window.cambiarTamano = function(delta) {
        let size = parseInt(localStorage.getItem('fontSize')) || 16;
        size += delta;
        if (size < 12) size = 12;
        if (size > 22) size = 22;
        localStorage.setItem('fontSize', size);
        aplicarPreferencias();
    };

    window.toggleContraste = function() {
        let highContrast = localStorage.getItem('highContrast') === 'true';
        localStorage.setItem('highContrast', !highContrast);
        aplicarPreferencias();
    };

    function aplicarPreferencias() {
        const size = localStorage.getItem('fontSize') || 16;
        document.body.style.fontSize = size + 'px';
        const highContrast = localStorage.getItem('highContrast') === 'true';
        if (highContrast) {
            document.body.classList.add('high-contrast');
        } else {
            document.body.classList.remove('high-contrast');
        }
    }
})();