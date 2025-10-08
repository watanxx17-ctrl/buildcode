const guns = [
            {
                name: "M250",
                type: "Light Machine Gun",
                code: "M250 General Machine Gun-Operations-6HNBPV400UQCIBP788D1T",
                imageUrl: "img/m250-1.jpg" 
            },
            {
                name: "M250",
                type: "Light Machine Gun",
                code: "M250 General Machine Gun-Operations-6HNBQC800UQCIBP788D1T",
                imageUrl: "img/m250-2.jpg" 
            },
            {
                name: "M250",
                type: "Light Machine Gun",
                code: "M250 General Machine Gun-Operations-6HNBQCO00UQCIBP788D1T",
                imageUrl: "img/m250-3.jpg" 
            },
            {
                name: "M250",
                type: "Light Machine Gun",
                code: "M250 General Machine Gun-Operations-6HNBQDC00UQCIBP788D1T",
                imageUrl: "img/m250-4.jpg" 
            },
            {
                name: "M250",
                type: "Light Machine Gun",
                code: "M250 General Machine Gun-Operations-6HNBQE000UQCIBP788D1T",
                imageUrl: "img/m250-5.jpg" 
            },
            {
                name: "M249",
                type: "Light Machine Gun",
                code: "M249 Light Machine Gun-Operations-6HNBQJO00UQCIBP788D1T", 
                imageUrl: "img/m249-1.jpg"
            },
            {
                name: "PKM",
                type: "Light Machine Gun",
                code: "PKM General Machine Gun-Operations-6HNBQM000UQCIBP788D1T", 
                imageUrl: "img/pkm-1.jpg"
            },
            {
                name: "PKM",
                type: "Light Machine Gun",
                code: "PKM General Machine Gun-Operations-6HNBQQ400UQCIBP788D1T", 
                imageUrl: "img/pkm-2.jpg"
            },
            {
                name: "PKM",
                type: "Light Machine Gun",
                code: "PKM General Machine Gun-Operations-6HNBQS400UQCIBP788D1T", 
                imageUrl: "img/pkm-3.jpg"
            },
            {
                name: "PKM",
                type: "Light Machine Gun",
                code: "PKM General Machine Gun-Operations-6HKLN3O00UQCIBP788D1T", 
                imageUrl: "img/pkm-4.jpg"
            },
            {
                name: "MK47",
                type: "Assault Rifle",
                code: "MK47 Assault Rifle-Operations-6HNBR0G00UQCIBP788D1T", 
                imageUrl: "img/mk47-1.jpg"
            },
            {
                name: "KC17",
                type: "Assault Rifle",
                code: "KC17 Assault Rifle-Operations-6HNBR3800UQCIBP788D1T", 
                imageUrl: "img/kc17-1.jpg"
            },
            {
                name: "K437",
                type: "Assault Rifle",
                code: "K437 Assault Rifle-Operations-6HL9VI000UQCIBP788D1T", 
                imageUrl: "img/k437-1.jpg"
            },
            {
                name: "CI-19",
                type: "Assault Rifle",
                code: "CI-19 Assault Rifle-Operations-6HN01EO00UQCIBP788D1T", 
                imageUrl: "img/ci-1.jpg"
            },
            {
                name: "M7",
                type: "Assault Rifle",
                code: "M7 Battle Rifle-Operations-6HNBRL800UQCIBP788D1T", 
                imageUrl: "img/m7-1.jpg"
            },
            {
                name: "M7",
                type: "Assault Rifle",
                code: "M7 Battle Rifle-Operations-6HKGC3K00UQCIBP788D1T", 
                imageUrl: "img/m7-2.jpg"
            },
            {
                name: "M7",
                type: "Assault Rifle",
                code: "M7 Battle Rifle-Operations-6HNBRMO00UQCIBP788D1T", 
                imageUrl: "img/m7-3.jpg"
            },
            {
                name: "M7",
                type: "Assault Rifle",
                code: "M7 Battle Rifle-Operations-6HNBRNC00UQCIBP788D1T", 
                imageUrl: "img/m7-4.jpg"
            },
            {
                name: "M7",
                type: "Assault Rifle",
                code: "M7 Battle Rifle-Operations-6HLRNHO00UQCIBP788D1T", 
                imageUrl: "img/m7-5.jpg"
            },
            {
                name: "M7",
                type: "Assault Rifle",
                code: "M7 Battle Rifle-Operations-6HPN52800UQCIBP788D1T", 
                imageUrl: "img/m7-6.jpg"
            },
            {
                name: "M7",
                type: "Assault Rifle",
                code: "M7 Battle Rifle-Operations-6HPN55C00UQCIBP788D1T", 
                imageUrl: "img/m7-7.jpg"
            },
            {
                name: "AUG",
                type: "Assault Rifle",
                code: "AUG Assault Rifle-Operations-6HNBRTG00UQCIBP788D1T", 
                imageUrl: "img/aug-1.jpg"
            },
            {
                name: "AUG",
                type: "Assault Rifle",
                code: "AUG Assault Rifle-Operations-6HNBRU400UQCIBP788D1T", 
                imageUrl: "img/aug-2.jpg"
            },
            {
                name: "K416",
                type: "Assault Rifle",
                code: "K416 Assault Rifle-Operations-6HNBS0000UQCIBP788D1T", 
                imageUrl: "img/k416-1.jpg"
            },
            {
                name: "ASh-12",
                type: "Assault Rifle",
                code: "ASh-12 Assault Rifle-Operations-6HNBS2G00UQCIBP788D1T", 
                imageUrl: "img/ash-1.jpg"
            },
            {
                name: "SR-25",
                type: "Marksman Rifle",
                code: "SR-25 Marksman Rifle-Operations-6HNBS9400UQCIBP788D1T", 
                imageUrl: "img/sr25-1.jpg"
            },
            {
                name: "M14",
                type: "Marksman Rifle",
                code: "M14 Marksman Rifle-Operations-6HNBSJG00UQCIBP788D1T", 
                imageUrl: "img/m14-1.jpg"
            },
            {
                name: "M14",
                type: "Marksman Rifle",
                code: "M14 Marksman Rifle-Operations-6HNBSKK00UQCIBP788D1T", 
                imageUrl: "img/m14-2.jpg"
            },
            {
                name: "M14",
                type: "Marksman Rifle",
                code: "M14 Marksman Rifle-Operations-6HNBSLO00UQCIBP788D1T", 
                imageUrl: "img/m14-3.jpg"
            },
            {
                name: "AWM",
                type: "Sniper Rifle",
                code: "AWM Sniper Rifle-Operations-6HNBSNO00UQCIBP788D1T", 
                imageUrl: "img/aw-1.jpg"
            },
            {
                name: "M700",
                type: "Sniper Rifle",
                code: "M700 Sniper Rifle-Operations-6HNBSS400UQCIBP788D1T", 
                imageUrl: "img/m700-1.jpg"
            },
            {
                name: "IPAD PRO M4",
                type: "HUD",
                code: "ab3b-7468-3101-fff0-ee8e", 
                imageUrl: "img/hudiphone.jpg"
            },
            {
                name: "I PHONE 13PM",
                type: "HUD",
                code: "6163-193b-0ec1-955a-4f82", 
                imageUrl: "img/hudiphone.jpg"
            },

        ];

const gunListElement = document.getElementById('gun-list');
const filterButtonsElement = document.getElementById('filter-buttons');
let currentFilterType = 'All';

function renderGuns(gunArray) {
    gunListElement.innerHTML = '';
    gunArray.forEach((gun, index) => {
        const uniqueId = gun.name.replace(/\s/g, '-') + '-' + index;
        const card = document.createElement('div');
        card.className = 'gun-card';
        card.setAttribute('data-gun-name', gun.name.toLowerCase());

        card.innerHTML = `
            <div class="gun-image-container">
                <img src="${gun.imageUrl}" alt="${gun.name}" 
                     onerror="this.onerror=null;this.src='https://via.placeholder.com/200x100?text=No+Image';">
            </div>
            <div class="gun-info">
                <h2>${gun.name.toUpperCase()}</h2>
                <p>${gun.type}</p>
                <div class="code-display hidden" id="code-box-${uniqueId}" data-code="${gun.code}">${gun.code}</div>
                <div class="button-group">
                    <button class="btn btn-show" id="show-btn-${uniqueId}" onclick="toggleCode('${uniqueId}', this)">Show Code</button>
                    <button class="btn btn-copy" onclick="copyCode('${uniqueId}', this)">Copy</button>
                </div>
                <p class="copy-success hidden" id="success-msg-${uniqueId}">คัดลอกสำเร็จ!</p>
            </div>
        `;
        gunListElement.appendChild(card);
    });
}

function createFilterButtons() {
    const types = ['All'];
    guns.forEach(gun => { if (!types.includes(gun.type)) types.push(gun.type); });
    filterButtonsElement.innerHTML = '';
    types.forEach(type => {
        const button = document.createElement('button');
        button.className = 'filter-btn';
        if (type === 'All') button.classList.add('active');
        button.textContent = type;
        button.setAttribute('onclick', `filterByType('${type}', this)`);
        filterButtonsElement.appendChild(button);
    });
}

function filterByType(type, buttonElement) {
    currentFilterType = type;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    buttonElement.classList.add('active');
    document.getElementById('search-input').value = '';
    renderGuns(type === 'All' ? guns : guns.filter(gun => gun.type === type));
}

function filterGuns() {
    const filterText = document.getElementById('search-input').value.toLowerCase();
    const filteredByText = guns.filter(gun => gun.name.toLowerCase().includes(filterText) || gun.type.toLowerCase().includes(filterText));
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    currentFilterType = 'Search';
    renderGuns(filteredByText);
}

function toggleCode(uniqueId, buttonElement) {
    const codeBox = document.getElementById(`code-box-${uniqueId}`);
    const isHidden = codeBox.classList.contains('hidden');
    codeBox.classList.toggle('hidden');
    buttonElement.textContent = isHidden ? 'Hide Code' : 'Show Code';
    document.getElementById(`success-msg-${uniqueId}`).classList.add('hidden');
}

function copyCode(uniqueId, buttonElement) {
    const codeBox = document.getElementById(`code-box-${uniqueId}`);
    const code = codeBox.getAttribute('data-code');
    const successMsg = document.getElementById(`success-msg-${uniqueId}`);
    const showButton = document.getElementById(`show-btn-${uniqueId}`);
    if (codeBox.classList.contains('hidden')) {
        codeBox.classList.remove('hidden');
        showButton.textContent = 'Hide Code';
    }
    navigator.clipboard.writeText(code).then(() => {
        successMsg.classList.remove('hidden');
        buttonElement.textContent = 'COPIED! ✅';
        setTimeout(() => {
            successMsg.classList.add('hidden');
            buttonElement.textContent = 'Copy';
        }, 3000);
    }).catch(err => {
        console.error('ไม่สามารถคัดลอกได้:', err);
        alert('ไม่สามารถคัดลอกได้ โปรดลองคัดลอกด้วยตนเอง');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    createFilterButtons();
    renderGuns(guns);
});
