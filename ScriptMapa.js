

const catInfo = {
    lab:   { color: '#34baeb', label: 'Laboratorio' },
    aula:  { color: '#a78bfa', label: 'Aula' },
    admin: { color: '#d97706', label: 'Administración' },
    bano:  { color: '#475569', label: 'Sanitarios' },
};

let selectedRoom = null;

// Hover tooltip
document.querySelectorAll('.room').forEach(room => {
    const tt = document.getElementById('tt');

    room.addEventListener('mouseenter', e => {
        document.getElementById('ttName').textContent = room.dataset.name;
        document.getElementById('ttType').textContent = catInfo[room.dataset.type]?.label || '';
        tt.classList.add('visible');
    });

    room.addEventListener('mousemove', e => {
        tt.style.left = (e.clientX + 12) + 'px';
        tt.style.top  = (e.clientY - 28) + 'px';
    });

    room.addEventListener('mouseleave', () => tt.classList.remove('visible'));
});

// Seleccionar room — muestra info en tooltip extendido si existe

function selectRoom(el) {
    if (selectedRoom) selectedRoom.classList.remove('selected');
    selectedRoom = el;
    el.classList.add('selected');

    // Si existe un panel de info en el HTML, lo actualiza
    const infoPanel = document.getElementById('infoPanel');
    if (infoPanel) {
        const cat = catInfo[el.dataset.type] || { color: '#555', label: 'Espacio' };
        document.getElementById('iName').textContent  = el.dataset.name;
        document.getElementById('iType').textContent  = cat.label;
        document.getElementById('iDesc').textContent  = el.dataset.desc;

        const tag = document.getElementById('iTag');
        tag.textContent        = cat.label;
        tag.style.background   = cat.color + '22';
        tag.style.color        = cat.color;
        tag.style.border       = '1px solid ' + cat.color + '55';

        infoPanel.classList.add('visible');
    }
}

function closeInfo() {
    const infoPanel = document.getElementById('infoPanel');
    if (infoPanel) infoPanel.classList.remove('visible');
    if (selectedRoom) {
        selectedRoom.classList.remove('selected');
        selectedRoom = null;
    }
}

document.querySelectorAll('.room[data-type="aula"]').forEach(room => {
    const rect = room.querySelector('rect');
    const image = room.querySelector('image');
    
    if (rect && image) {
        // Aumentar 15px width y 12px height
        const newWidth = parseFloat(rect.getAttribute('width')) + 15;
        const newHeight = parseFloat(rect.getAttribute('height')) + 12;
        
        rect.setAttribute('width', newWidth);
        rect.setAttribute('height', newHeight);
        image.setAttribute('width', newWidth);
        image.setAttribute('height', newHeight);
        rect.style.strokeWidth = '2px';
    }
});