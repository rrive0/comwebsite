// ข้อมูลคอมโพเนนต์
const components = {
    cpu: [
        { 
            id: 1,
            name: "Intel Core i3-12100F", 
            price: 3500, 
            description: "4 Core 8 Thread, ขึ้นต้นที่ดีสำหรับงานทั่วไปและเกมเบาๆ",
            image: "images/cpu/intel-i3.jpg",
            brand: "Intel",
            specs: "4 Cores, 8 Threads, 4.3GHz"
        },
        { 
            id: 2,
            name: "AMD Ryzen 5 5600", 
            price: 5500, 
            description: "6 Core 12 Thread, คุ้มค่าสำหรับเล่นเกมและทำงานทั่วไป",
            image: "images/cpu/ryzen-5.jpg",
            brand: "AMD",
            specs: "6 Cores, 12 Threads, 4.4GHz"
        },
        { 
            id: 3,
            name: "Intel Core i5-13400F", 
            price: 7500, 
            description: "10 Core 16 Thread, ประสิทธิภาพสูงสำหรับการทำงานหลายอย่าง",
            image: "images/cpu/intel-i5.jpg",
            brand: "Intel",
            specs: "10 Cores, 16 Threads, 4.6GHz"
        },
        { 
            id: 4,
            name: "AMD Ryzen 7 7700X", 
            price: 11500, 
            description: "8 Core 16 Thread, ประสิทธิภาพสูงสำหรับงานสร้างสรรค์และเกม",
            image: "images/cpu/ryzen-7.jpg",
            brand: "AMD",
            specs: "8 Cores, 16 Threads, 5.4GHz"
        },
        { 
            id: 5,
            name: "Intel Core i7-13700K", 
            price: 14500, 
            description: "16 Core 24 Thread, เหมาะกับงานหนักและเกมระดับสูง",
            image: "images/cpu/intel-i7.jpg",
            brand: "Intel",
            specs: "16 Cores, 24 Threads, 5.4GHz"
        },
        { 
            id: 6,
            name: "AMD Ryzen 9 7900X", 
            price: 18500, 
            description: "12 Core 24 Thread, ประสิทธิภาพสูงสุดสำหรับทุกงาน",
            image: "images/cpu/ryzen-9.jpg",
            brand: "AMD",
            specs: "12 Cores, 24 Threads, 5.6GHz"
        }
    ],
    gpu: [
        { 
            id: 1,
            name: "NVIDIA GTX 1650", 
            price: 5500, 
            description: "4GB GDDR6, เหมาะกับเกมระดับเริ่มต้นและงานทั่วไป",
            image: "images/gpu/gtx1650.jpg",
            brand: "NVIDIA",
            specs: "4GB GDDR6, 128-bit"
        },
        { 
            id: 2,
            name: "AMD Radeon RX 6600", 
            price: 8500, 
            description: "8GB GDDR6, คุ้มค่าสำหรับเล่นเกม 1080p",
            image: "images/gpu/rx6600.jpg",
            brand: "AMD",
            specs: "8GB GDDR6, 128-bit"
        },
        { 
            id: 3,
            name: "NVIDIA RTX 4060", 
            price: 12500, 
            description: "8GB GDDR6, ประสิทธิภาพดีสำหรับเกม 1080p-1440p",
            image: "images/gpu/rtx4060.jpg",
            brand: "NVIDIA",
            specs: "8GB GDDR6, 128-bit"
        },
        { 
            id: 4,
            name: "AMD Radeon RX 7700 XT", 
            price: 16500, 
            description: "12GB GDDR6, ประสิทธิภาพสูงสำหรับเกม 1440p",
            image: "images/gpu/rx7700xt.jpg",
            brand: "AMD",
            specs: "12GB GDDR6, 192-bit"
        },
        { 
            id: 5,
            name: "NVIDIA RTX 4070 Super", 
            price: 24500, 
            description: "12GB GDDR6X, เหมาะกับเกม 1440p และงานเร็นเดอร์",
            image: "images/gpu/rtx4070s.jpg",
            brand: "NVIDIA",
            specs: "12GB GDDR6X, 192-bit"
        },
        { 
            id: 6,
            name: "AMD Radeon RX 7900 XT", 
            price: 29500, 
            description: "20GB GDDR6, ประสิทธิภาพสูงสุดสำหรับเกม 4K",
            image: "images/gpu/rx7900xt.jpg",
            brand: "AMD",
            specs: "20GB GDDR6, 320-bit"
        }
    ],
    ram: [
        { 
            id: 1,
            name: "DDR4 16GB (3200MHz)", 
            price: 1200, 
            description: "16GB (2x8GB) DDR4 3200MHz CL16",
            image: "images/ram/ddr4-16gb.jpg",
            brand: "Various",
            specs: "16GB DDR4, 3200MHz, CL16"
        },
        { 
            id: 2,
            name: "DDR4 32GB (3200MHz)", 
            price: 2200, 
            description: "32GB (2x16GB) DDR4 3200MHz CL16",
            image: "images/ram/ddr4-32gb.jpg",
            brand: "Various",
            specs: "32GB DDR4, 3200MHz, CL16"
        },
        { 
            id: 3,
            name: "DDR5 32GB (5600MHz)", 
            price: 3500, 
            description: "32GB (2x16GB) DDR5 5600MHz CL36",
            image: "images/ram/ddr5-32gb.jpg",
            brand: "Various",
            specs: "32GB DDR5, 5600MHz, CL36"
        },
        { 
            id: 4,
            name: "DDR5 64GB (6000MHz)", 
            price: 6500, 
            description: "64GB (2x32GB) DDR5 6000MHz CL30",
            image: "images/ram/ddr5-64gb.jpg",
            brand: "Various",
            specs: "64GB DDR5, 6000MHz, CL30"
        }
    ],
    storage: [
        { 
            id: 1,
            name: "SSD NVMe 500GB", 
            price: 1200, 
            description: "NVMe PCIe 3.0 500GB สำหรับระบบปฏิบัติการ",
            image: "images/storage/ssd-500gb.jpg",
            brand: "Various",
            specs: "500GB NVMe, PCIe 3.0"
        },
        { 
            id: 2,
            name: "SSD NVMe 1TB", 
            price: 2000, 
            description: "NVMe PCIe 4.0 1TB ความเร็วสูง",
            image: "images/storage/ssd-1tb.jpg",
            brand: "Various",
            specs: "1TB NVMe, PCIe 4.0"
        },
        { 
            id: 3,
            name: "SSD NVMe 2TB", 
            price: 3800, 
            description: "NVMe PCIe 4.0 2TB ความเร็วสูง พื้นที่เก็บข้อมูลมาก",
            image: "images/storage/ssd-2tb.jpg",
            brand: "Various",
            specs: "2TB NVMe, PCIe 4.0"
        },
        { 
            id: 4,
            name: "HDD 2TB", 
            price: 1800, 
            description: "HDD 2TB 7200RPM สำหรับเก็บข้อมูลจำนวนมาก",
            image: "images/storage/hdd-2tb.jpg",
            brand: "Various",
            specs: "2TB HDD, 7200RPM"
        },
        { 
            id: 5,
            name: "SSD 1TB + HDD 2TB", 
            price: 3500, 
            description: "SSD 1TB สำหรับระบบ + HDD 2TB สำหรับเก็บข้อมูล",
            image: "images/storage/combo.jpg",
            brand: "Various",
            specs: "1TB SSD + 2TB HDD"
        }
    ],
    psu: [
        { 
            id: 1,
            name: "550W 80+ Bronze", 
            price: 1800, 
            description: "550W 80+ Bronze Certified เหมาะกับระบบพื้นฐาน",
            image: "images/psu/550w-bronze.jpg",
            brand: "Various",
            specs: "550W, 80+ Bronze"
        },
        { 
            id: 2,
            name: "650W 80+ Gold", 
            price: 2800, 
            description: "650W 80+ Gold Certified ประสิทธิภาพดี",
            image: "images/psu/650w-gold.jpg",
            brand: "Various",
            specs: "650W, 80+ Gold"
        },
        { 
            id: 3,
            name: "750W 80+ Gold", 
            price: 3500, 
            description: "750W 80+ Gold Certified สำหรับระบบประสิทธิภาพสูง",
            image: "images/psu/750w-gold.jpg",
            brand: "Various",
            specs: "750W, 80+ Gold"
        },
        { 
            id: 4,
            name: "850W 80+ Gold", 
            price: 4500, 
            description: "850W 80+ Gold Certified สำหรับระบบระดับสูง",
            image: "images/psu/850w-gold.jpg",
            brand: "Various",
            specs: "850W, 80+ Gold"
        },
        { 
            id: 5,
            name: "1000W 80+ Platinum", 
            price: 6500, 
            description: "1000W 80+ Platinum Certified สำหรับระบบสุดพิเศษ",
            image: "images/psu/1000w-plat.jpg",
            brand: "Various",
            specs: "1000W, 80+ Platinum"
        }
    ],
    case: [
        { 
            id: 1,
            name: "Micro ATX Case", 
            price: 1200, 
            description: "เคสขนาดเล็ก เหมาะกับพื้นที่จำกัด",
            image: "images/case/matx.jpg",
            brand: "Various",
            specs: "Micro ATX"
        },
        { 
            id: 2,
            name: "ATX Mid Tower", 
            price: 2000, 
            description: "เคสมาตรฐาน มีพื้นที่เพียงพอสำหรับส่วนประกอบทั้งหมด",
            image: "images/case/mid-tower.jpg",
            brand: "Various",
            specs: "ATX Mid Tower"
        },
        { 
            id: 3,
            name: "ATX Full Tower", 
            price: 3500, 
            description: "เคสขนาดใหญ่ มีพื้นที่เหลือเฟือและระบบระบายอากาศดี",
            image: "images/case/full-tower.jpg",
            brand: "Various",
            specs: "ATX Full Tower"
        },
        { 
            id: 4,
            name: "Premium ATX Case", 
            price: 5000, 
            description: "เคสพรีเมียม วัสดุคุณภาพสูง ดีไซน์สวยงาม",
            image: "images/case/premium.jpg",
            brand: "Various",
            specs: "Premium ATX"
        }
    ]
};

// ตัวแปรเก็บคอมโพเนนต์ที่เลือกในโหมด Manual
let selectedComponents = {
    cpu: null,
    gpu: null,
    ram: null,
    storage: null,
    psu: null,
    case: null
};

// ฟังก์ชันเปลี่ยนแท็บ
function initializeTabs() {
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            // ลบคลาส active จากแท็บทั้งหมด
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            // เพิ่มคลาส active ให้แท็บที่คลิก
            tab.classList.add('active');
            
            // ซ่อนเนื้อหาทั้งหมด
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // แสดงเนื้อหาของแท็บที่เลือก
            const tabId = tab.getAttribute('data-tab');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
}

// ฟังก์ชันสร้างคอมโพเนนต์กริดสำหรับโหมด Manual
function initializeManualBuild() {
    for (const category in components) {
        const grid = document.getElementById(`${category}-grid`);
        grid.innerHTML = '';
        
        components[category].forEach(component => {
            const card = document.createElement('div');
            card.className = 'component-card';
            card.innerHTML = `
                <div class="component-image">
                    <i class="fas fa-${getComponentIcon(category)}"></i>
                </div>
                <h4>${component.name}</h4>
                <p>${component.description}</p>
                <div class="component-price">
                    <i class="fas fa-tag"></i>
                    ${component.price.toLocaleString()} บาท
                </div>
            `;
            
            card.addEventListener('click', () => {
                selectComponent(category, component);
            });
            
            grid.appendChild(card);
        });
    }
}

// ฟังก์ชันไอคอนสำหรับแต่ละประเภทคอมโพเนนต์
function getComponentIcon(category) {
    const icons = {
        cpu: 'microchip',
        gpu: 'gamepad',
        ram: 'memory',
        storage: 'hdd',
        psu: 'bolt',
        case: 'desktop'
    };
    return icons[category] || 'cube';
}

// ฟังก์ชันเลือกคอมโพเนนต์ในโหมด Manual
function selectComponent(category, component) {
    selectedComponents[category] = component;
    
    // อัพเดท UI
    document.getElementById(`manual-${category}`).textContent = component.name;
    
    // อัพเดทการเลือกในกริด
    document.querySelectorAll(`#${category}-grid .component-card`).forEach(card => {
        card.classList.remove('selected');
    });
    
    // หาการ์ดที่ถูกเลือกและเพิ่มคลาส selected
    const cards = document.querySelectorAll(`#${category}-grid .component-card`);
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].querySelector('h4').textContent === component.name) {
            cards[i].classList.add('selected');
            break;
        }
    }
    
    updateTotalPrice();
}

// ฟังก์ชันอัพเดทราคารวมในโหมด Manual
function updateTotalPrice() {
    let total = 0;
    for (const category in selectedComponents) {
        if (selectedComponents[category]) {
            total += selectedComponents[category].price;
        }
    }
    
    document.getElementById('total-price').textContent = total.toLocaleString();
    
    // ตรวจสอบงบประมาณ
    const budgetInput = document.getElementById('budget');
    const budgetStatus = document.getElementById('budget-status');
    
    if (budgetInput.value) {
        const budget = parseInt(budgetInput.value);
        
        if (total > budget) {
            budgetStatus.innerHTML = `
                <div class="budget-warning">
                    <i class="fas fa-exclamation-triangle"></i>
                    เกินงบประมาณ ${(total - budget).toLocaleString()} บาท
                </div>
            `;
        } else {
            budgetStatus.innerHTML = `
                <div class="budget-ok">
                    <i class="fas fa-check-circle"></i>
                    เหลืองบประมาณ ${(budget - total).toLocaleString()} บาท
                </div>
            `;
        }
    }
}

// ฟังก์ชันจัดสเปกตามงบ
function buildPC() {
    const budget = parseInt(document.getElementById('budget').value);
    const resultDiv = document.getElementById('auto-result');
    
    if (!budget || budget < 8000) {
        resultDiv.innerHTML = `
            <div class="budget-warning" style="margin: 0;">
                <i class="fas fa-exclamation-triangle"></i>
                <h3>งบน้อยเกินไป</h3>
                <p>ต้องมากกว่า 8,000 บาทขึ้นไป</p>
            </div>
        `;
        return;
    }
    
    let cpu, gpu, ram, storage, psu, casing;
    let totalCost = 0;
    
    if (budget <= 15000) {
        cpu = components.cpu[0]; // Intel i3
        gpu = components.gpu[0]; // GTX 1650
        ram = components.ram[0]; // 16GB DDR4
        storage = components.storage[0]; // SSD 500GB
        psu = components.psu[0]; // 550W Bronze
        casing = components.case[0]; // Micro ATX
    } else if (budget <= 25000) {
        cpu = components.cpu[1]; // Ryzen 5
        gpu = components.gpu[1]; // RX 6600
        ram = components.ram[0]; // 16GB DDR4
        storage = components.storage[1]; // SSD 1TB
        psu = components.psu[1]; // 650W Gold
        casing = components.case[1]; // ATX Mid Tower
    } else if (budget <= 40000) {
        cpu = components.cpu[2]; // Intel i5
        gpu = components.gpu[2]; // RTX 4060
        ram = components.ram[1]; // 32GB DDR4
        storage = components.storage[2]; // SSD 2TB
        psu = components.psu[2]; // 750W Gold
        casing = components.case[1]; // ATX Mid Tower
    } else if (budget <= 60000) {
        cpu = components.cpu[3]; // Ryzen 7
        gpu = components.gpu[3]; // RX 7700 XT
        ram = components.ram[2]; // 32GB DDR5
        storage = components.storage[2]; // SSD 2TB
        psu = components.psu[3]; // 850W Gold
        casing = components.case[2]; // ATX Full Tower
    } else {
        cpu = components.cpu[5]; // Ryzen 9
        gpu = components.gpu[5]; // RX 7900 XT
        ram = components.ram[3]; // 64GB DDR5
        storage = components.storage[2]; // SSD 2TB
        psu = components.psu[4]; // 1000W Platinum
        casing = components.case[3]; // Premium ATX Case
    }
    
    totalCost = cpu.price + gpu.price + ram.price + storage.price + psu.price + casing.price;
    
    resultDiv.innerHTML = `
        <div class="spec-result">
            <h2><i class="fas fa-laptop"></i> สเปกที่เหมาะสมกับงบ ${budget.toLocaleString()} บาท</h2>
            <div class="spec-summary">
                <div class="spec-item">
                    <span class="spec-label">CPU:</span>
                    <span class="spec-value">${cpu.name}</span>
                </div>
                <div class="spec-item">
                    <span class="spec-label">GPU:</span>
                    <span class="spec-value">${gpu.name}</span>
                </div>
                <div class="spec-item">
                    <span class="spec-label">RAM:</span>
                    <span class="spec-value">${ram.name}</span>
                </div>
                <div class="spec-item">
                    <span class="spec-label">Storage:</span>
                    <span class="spec-value">${storage.name}</span>
                </div>
                <div class="spec-item">
                    <span class="spec-label">PSU:</span>
                    <span class="spec-value">${psu.name}</span>
                </div>
                <div class="spec-item">
                    <span class="spec-label">Case:</span>
                    <span class="spec-value">${casing.name}</span>
                </div>
            </div>
            <div class="total-price">ราคารวมประมาณ: ${totalCost.toLocaleString()} บาท</div>
            <div class="${totalCost <= budget ? 'budget-ok' : 'budget-warning'}">
                <i class="fas ${totalCost <= budget ? 'fa-check-circle' : 'fa-exclamation-triangle'}"></i>
                ${totalCost <= budget ? 
                    `เหลืองบประมาณ ${(budget - totalCost).toLocaleString()} บาท` : 
                    `เกินงบประมาณ ${(totalCost - budget).toLocaleString()} บาท`}
            </div>
        </div>
    `;
}

// ฟังก์ชันบันทึกสเปก
function saveBuild() {
    const total = document.getElementById('total-price').textContent;
    if (total === '0') {
        alert('กรุณาเลือกคอมโพเนนต์ก่อนบันทึก');
        return;
    }
    
    alert('บันทึกสเปกคอมพิวเตอร์เรียบร้อยแล้ว!');
    // ในเวอร์ชันจริงควรเก็บข้อมูลใน localStorage หรือส่งไปยังเซิร์ฟเวอร์
}

// ฟังก์ชันแชร์สเปก
function shareBuild() {
    const total = document.getElementById('total-price').textContent;
    if (total === '0') {
        alert('กรุณาเลือกคอมโพเนนต์ก่อนแชร์');
        return;
    }
    
    alert('ฟังก์ชันแชร์สเปก - ในเวอร์ชันจริงจะสร้างลิงก์สำหรับแชร์');
}

// ฟังก์ชันเปลี่ยนไปที่แท็บ Manual
function switchToManual() {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    document.querySelector('.tab[data-tab="manual"]').classList.add('active');
    document.getElementById('manual-tab').classList.add('active');
}

// ฟังก์ชันตั้งค่าปุ่ม Preset Budget
function initializePresetButtons() {
    document.querySelectorAll('.preset-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const budget = btn.getAttribute('data-budget');
            document.getElementById('budget').value = budget;
            buildPC();
        });
    });
}

// เริ่มต้นแอปพลิเคชันเมื่อโหลดหน้า
document.addEventListener('DOMContentLoaded', function() {
    initializeTabs();
    initializeManualBuild();
    initializePresetButtons();
    
    // ตั้งค่าให้ buildPC ทำงานเมื่อกด Enter ในช่องงบประมาณ
    document.getElementById('budget').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            buildPC();
        }
    });
});