export interface Product {
    id: string
    name: string
    slug: string
    shortDescription: string
    price: number
    originalPrice?: number
    currency: string
    category: string
    image: string
    imageFolder?: string
    media?: string[]
    rating: number
    reviewCount: number
    inStock: boolean
    availableNow: boolean
    launchDate?: string
    features: string[]
    description: string
    whoIsItFor: string[]
    howToTest: string[]
    howToReadResults: string[]
    reviews: Review[]
}

export interface Review {
    name: string
    location: string
    rating: number
    date: string
    comment: string
    verified: boolean
}

// ——————————————————————————————————————————————
// WELLNESS & LIFESTYLE
// ——————————————————————————————————————————————

const vitaminD: Product = {
    id: 'vitamin-d', name: 'Vitamin D Self Test', slug: 'vitamin-d',
    shortDescription: 'Check your Vitamin D levels at home in minutes.',
    price: 99, originalPrice: 249, currency: '₹', category: 'Wellness & Lifestyle',
    image: '/product/vitamin-d/1.png', imageFolder: '/product/vitamin-d',
    rating: 4.8, reviewCount: 342, inStock: true, availableNow: true,
    features: ['Results in 10 min', 'Finger-prick', 'CE & IVD certified', 'Shade card'],
    description: 'Vitamin D is essential for bone health, immune function, and muscle strength. Deficiency is extremely common in India due to indoor lifestyles. Our test detects 25-hydroxy Vitamin D levels via a lateral flow immunoassay from a finger-prick sample.',
    whoIsItFor: ['Fatigue, bone pain, or frequent illness', 'Office workers with limited sun exposure', 'Elderly at risk of bone issues', 'Vegetarians/vegans', 'Regular monitoring'],
    howToTest: ['Wash hands with warm water', 'Clean fingertip with alcohol swab', 'Prick finger with safety lancet', 'Collect blood with pipette', 'Place blood in cassette well', 'Add 2 drops buffer', 'Wait 10 minutes'],
    howToReadResults: ['Compare line color with shade card', 'Strong line = sufficient (>30 ng/mL)', 'Faint line = insufficiency (20-30 ng/mL)', 'No test line = deficiency (<20 ng/mL)', 'Control line must appear for valid test'],
    reviews: [
        { name: 'Priya Mehra', location: 'Mumbai', rating: 5, date: '2025-12-15', comment: 'Very easy to use. Found out I was deficient and started supplements.', verified: true },
        { name: 'Rajesh Kumar', location: 'Delhi', rating: 4, date: '2025-11-20', comment: 'Quick results. Shade card comparison was straightforward.', verified: true },
        { name: 'Ananya Singh', location: 'Bangalore', rating: 5, date: '2025-10-08', comment: 'Saved me a trip to the lab. Accurate results.', verified: true },
    ],
}

const vitaminB12: Product = {
    id: 'vitamin-b12', name: 'Vitamin B12 Test', slug: 'vitamin-b12',
    shortDescription: 'Check B12 levels — crucial for nerve health.',
    price: 89, originalPrice: 229, currency: '₹', category: 'Wellness & Lifestyle',
    image: 'product/vitamin-b12/1.webp', imageFolder: '/product/vitamin-b12',
    rating: 4.7, reviewCount: 189, inStock: true, availableNow: false, launchDate: '1st July 2026',
    features: ['Results in 10 min', 'B12 detection', 'CE & IVD certified', 'Finger-prick'],
    description: 'Vitamin B12 is vital for nerve function, red blood cell formation, and DNA synthesis. Over 80% of Indian vegetarians are B12 deficient. Our test detects deficiency early so you can act.',
    whoIsItFor: ['Vegetarians and vegans', 'Elderly (absorption decreases with age)', 'Digestive issues or celiac disease', 'Numbness, tingling, brain fog', 'On metformin or acid-reducers'],
    howToTest: ['Wash hands with warm water', 'Clean fingertip with alcohol swab', 'Prick finger with safety lancet', 'Collect blood with pipette', 'Apply to cassette', 'Add buffer drops', 'Read after 10 minutes'],
    howToReadResults: ['Two lines (C+T): normal range', 'Only C line: may be deficient', 'No lines: invalid test', 'Compare intensity with shade card', 'Share results with doctor'],
    reviews: [
        { name: 'Amit Joshi', location: 'Pune', rating: 5, date: '2025-11-28', comment: 'Being vegetarian, this was eye-opening. Very deficient.', verified: true },
        { name: 'Pooja Desai', location: 'Mumbai', rating: 4, date: '2025-10-15', comment: 'Whole family used it. Three of us were deficient!', verified: true },
        { name: 'Vikram Rao', location: 'Bangalore', rating: 5, date: '2025-09-22', comment: 'Results matched my Thyrocare test.', verified: true },
    ],
}

const ferritin: Product = {
    id: 'iron-deficiency', name: 'Iron Deficiency (Ferritin) Test', slug: 'iron-deficiency',
    shortDescription: 'Detect iron deficiency anemia quickly at home.',
    price: 89, originalPrice: 199, currency: '₹', category: 'Wellness & Lifestyle',
    image: '/product/iron-deficiency/1.webp', imageFolder: '/product/iron-deficiency',
    rating: 4.7, reviewCount: 218, inStock: true, availableNow: true,
    features: ['Results in 10 min', 'Ferritin detection', 'CE & IVD certified', 'No lab visit'],
    description: 'Iron deficiency affects over 50% of Indian women. Our test detects Ferritin — the protein that stores iron. Low Ferritin is the earliest indicator, even before anemia develops.',
    whoIsItFor: ['Women with heavy periods', 'Pregnant or breastfeeding women', 'Chronic fatigue or weakness', 'Vegetarians/vegans', 'Athletes'],
    howToTest: ['Wash hands', 'Clean fingertip', 'Prick finger', 'Collect blood with pipette', 'Deposit in cassette', 'Add 2 drops buffer', 'Wait 10 minutes'],
    howToReadResults: ['Two lines: Ferritin normal', 'Only control: low Ferritin', 'No lines: invalid', 'Faint test line = borderline', 'Consult doctor if low'],
    reviews: [
        { name: 'Sneha Patel', location: 'Ahmedabad', rating: 5, date: '2025-11-12', comment: 'With PCOS, monitoring iron is essential. So convenient!', verified: true },
        { name: 'Kavita Sharma', location: 'Jaipur', rating: 4, date: '2025-10-25', comment: 'Identified deficiency early. Now on supplements.', verified: true },
        { name: 'Deepak Verma', location: 'Pune', rating: 5, date: '2025-09-30', comment: 'Used for my mother. Very easy for elderly.', verified: true },
    ],
}

const tsh: Product = {
    id: 'tsh', name: 'TSH Thyroid Test', slug: 'tsh',
    shortDescription: 'Monitor thyroid function from home.',
    price: 79, originalPrice: 199, currency: '₹', category: 'Wellness & Lifestyle',
    image: '/product/tsh/1.webp', imageFolder: '/product/tsh',
    rating: 4.9, reviewCount: 456, inStock: true, availableNow: true,
    features: ['Results in 10 min', 'TSH detection', 'CE & IVD certified', 'Clinically accurate'],
    description: 'TSH is the key marker for thyroid function. Abnormal levels indicate hypo/hyperthyroidism — extremely common in India. Our test uses lateral flow technology from a finger-prick sample.',
    whoIsItFor: ['Unexplained weight changes', 'Fatigue, hair loss, mood changes', 'Women planning pregnancy', 'On thyroid medication', 'Family history of thyroid disorders'],
    howToTest: ['Warm hands, clean fingertip', 'Prick finger', 'Collect blood with pipette', 'Apply to cassette', 'Add 2 drops buffer', 'Wait 10 minutes'],
    howToReadResults: ['Two lines: TSH normal (0.4–4.0 mIU/L)', 'Only C line: elevated TSH', 'Compare intensity with reference', 'Faint line = follow-up needed', 'Control line must appear'],
    reviews: [
        { name: 'Meera Iyer', location: 'Chennai', rating: 5, date: '2025-12-01', comment: 'I have Hashimoto\'s. Helps me track between lab visits.', verified: true },
        { name: 'Sanjay Gupta', location: 'Lucknow', rating: 5, date: '2025-11-15', comment: 'Detected my wife\'s thyroid issue early.', verified: true },
        { name: 'Nisha Reddy', location: 'Hyderabad', rating: 4, date: '2025-10-20', comment: 'Easy to use. Wish shade card had more detail.', verified: true },
    ],
}

const dustAllergy: Product = {
    id: 'dust-allergy', name: 'Dust Allergy Test', slug: 'dust-allergy',
    shortDescription: 'Detect dust mite allergy from home.',
    price: 79, originalPrice: 179, currency: '₹', category: 'Wellness & Lifestyle',
    image: '/first image.webp', imageFolder: '/product/dust-allergy',
    rating: 4.6, reviewCount: 134, inStock: true, availableNow: true,
    features: ['Results in 10 min', 'IgE detection', 'CE & IVD certified', 'Dust mite specific'],
    description: 'Dust mite allergy is one of the most common allergies in India due to humid climate. It causes sneezing, runny nose, and can worsen asthma. This test detects specific IgE antibodies.',
    whoIsItFor: ['Morning sneezing attacks', 'Year-round nasal congestion', 'Asthma worsening indoors', 'Itchy nose and eyes', 'Frequent sinus issues'],
    howToTest: ['Wash hands', 'Clean fingertip', 'Prick finger', 'Collect blood', 'Apply to cassette', 'Add buffer', 'Read after 10 minutes'],
    howToReadResults: ['Two lines: Dust mite allergy detected', 'Only C line: Not detected', 'Consider allergen-proof bedding', 'Air purifier recommended', 'Consult allergist for treatment'],
    reviews: [
        { name: 'Nikhil Agarwal', location: 'Delhi', rating: 5, date: '2025-10-10', comment: 'Delhi pollution + dust allergy. This test helped me get proper treatment.', verified: true },
    ],
}

const hba1c: Product = {
    id: 'hba1c', name: 'HbA1c Diabetes Test', slug: 'hba1c',
    shortDescription: 'Monitor your average blood sugar levels over 3 months.',
    price: 99, originalPrice: 299, currency: '₹', category: 'Wellness & Lifestyle',
    image: '/product/hba1c/1.webp', imageFolder: '/product/hba1c',
    rating: 4.8, reviewCount: 312, inStock: true, availableNow: false, launchDate: '1st July 2026',
    features: ['Results in 10 min', 'HbA1c detection', 'CE & IVD certified', '3-month average'],
    description: 'HbA1c reflects your average blood sugar over the past 2-3 months. India is the diabetes capital of the world with 100M+ diabetics. This test helps monitor glucose control without fasting.',
    whoIsItFor: ['Diabetics monitoring control', 'Pre-diabetic individuals', 'Family history of diabetes', 'Overweight or sedentary lifestyle', 'Regular health monitoring'],
    howToTest: ['Wash hands with warm water', 'Clean fingertip', 'Prick finger', 'Collect blood', 'Apply to test device', 'Add buffer', 'Read after 10 minutes'],
    howToReadResults: ['Below 5.7%: Normal', '5.7-6.4%: Pre-diabetic', '6.5%+: Diabetic range', 'Compare with shade card', 'Track over time'],
    reviews: [
        { name: 'Suresh Menon', location: 'Kerala', rating: 5, date: '2025-12-02', comment: 'Essential for managing my Type 2 diabetes at home.', verified: true },
        { name: 'Anita Bose', location: 'Kolkata', rating: 4, date: '2025-11-18', comment: 'No fasting needed! Much more convenient than lab tests.', verified: true },
    ],
}

const cholesterol: Product = {
    id: 'cholesterol', name: 'Cholesterol Test', slug: 'cholesterol',
    shortDescription: 'Check total cholesterol levels at home.',
    price: 89, originalPrice: 199, currency: '₹', category: 'Wellness & Lifestyle',
    image: '/product/cholesterol/1.webp', imageFolder: '/product/cholesterol',
    rating: 4.6, reviewCount: 178, inStock: true, availableNow: false, launchDate: '1st July 2026',
    features: ['Results in 10 min', 'Total cholesterol', 'CE & IVD certified', 'No fasting needed'],
    description: 'High cholesterol is a silent killer — no symptoms until it\'s too late. India sees rising heart disease rates. Our rapid test measures total cholesterol from a finger-prick sample.',
    whoIsItFor: ['Adults over 30', 'Family history of heart disease', 'Sedentary lifestyle', 'High-fat diet', 'On cholesterol medication'],
    howToTest: ['Wash hands', 'Clean fingertip', 'Prick finger', 'Collect blood', 'Apply to cassette', 'Add buffer', 'Read after 10 minutes'],
    howToReadResults: ['Below 200 mg/dL: Desirable', '200-239 mg/dL: Borderline', '240+ mg/dL: High', 'Compare with shade card', 'Consult doctor'],
    reviews: [
        { name: 'Rahul Das', location: 'Kolkata', rating: 5, date: '2025-11-10', comment: 'Found out my cholesterol was borderline. Changed my diet early.', verified: true },
        { name: 'Meena Jain', location: 'Mumbai', rating: 4, date: '2025-10-22', comment: 'Quick and easy. Good for regular monitoring.', verified: true },
    ],
}

const triglycerides: Product = {
    id: 'triglycerides', name: 'Triglycerides Test', slug: 'triglycerides',
    shortDescription: 'Measure triglyceride levels for heart health.',
    price: 89, originalPrice: 199, currency: '₹', category: 'Wellness & Lifestyle',
    image: '/first image.webp', imageFolder: '/product/triglycerides',
    rating: 4.5, reviewCount: 112, inStock: true, availableNow: false, launchDate: 'Coming Soon',
    features: ['Results in 10 min', 'Triglyceride level', 'CE & IVD certified', 'Heart health marker'],
    description: 'Elevated triglycerides increase cardiovascular risk. Combined with high cholesterol, they significantly raise heart attack risk. Monitor regularly with our simple home test.',
    whoIsItFor: ['High cholesterol patients', 'Diabetics', 'Overweight individuals', 'Family history of heart disease', 'Regular health checks'],
    howToTest: ['Wash hands', 'Clean fingertip', 'Prick finger', 'Collect blood', 'Apply to cassette', 'Add buffer', 'Read after 10 minutes'],
    howToReadResults: ['Below 150 mg/dL: Normal', '150-199 mg/dL: Borderline', '200+ mg/dL: High', 'Compare with shade card', 'Discuss with doctor'],
    reviews: [
        { name: 'Anil Kapoor', location: 'Delhi', rating: 4, date: '2025-10-15', comment: 'Good way to track alongside my cholesterol levels.', verified: true },
    ],
}

const lactose: Product = {
    id: 'lactose-intolerance', name: 'Lactose Intolerance Test', slug: 'lactose-intolerance',
    shortDescription: 'Find out if you\'re lactose intolerant.',
    price: 89, originalPrice: 199, currency: '₹', category: 'Wellness & Lifestyle',
    image: '/first image.webp', imageFolder: '/product/lactose-intolerance',
    rating: 4.6, reviewCount: 145, inStock: true, availableNow: false, launchDate: 'Coming Soon',
    features: ['Results in 10 min', 'IgE detection', 'CE & IVD certified', 'Simple test'],
    description: 'Lactose intolerance affects 60-70% of Indians. If you experience bloating, gas, or discomfort after dairy, this test helps confirm whether lactose is the cause.',
    whoIsItFor: ['Bloating after dairy', 'Gas and digestive discomfort', 'Suspected food sensitivity', 'Family history of intolerance', 'Diet planning'],
    howToTest: ['Wash hands', 'Clean fingertip', 'Prick finger', 'Collect blood', 'Apply to cassette', 'Add buffer', 'Read after 10 minutes'],
    howToReadResults: ['Two lines: Positive for lactose intolerance', 'Only C line: Not detected', 'Check line intensity', 'Adjust diet accordingly', 'Consult nutritionist'],
    reviews: [
        { name: 'Divya Nair', location: 'Chennai', rating: 5, date: '2025-11-05', comment: 'Finally explained years of bloating! Avoiding dairy now.', verified: true },
    ],
}

const hPylori: Product = {
    id: 'h-pylori', name: 'H. pylori Blood Test', slug: 'h-pylori',
    shortDescription: 'Detect H. pylori — a common cause of ulcers.',
    price: 89, originalPrice: 199, currency: '₹', category: 'Wellness & Lifestyle',
    image: '/first image.webp', imageFolder: '/product/h-pylori',
    rating: 4.7, reviewCount: 167, inStock: true, availableNow: false, launchDate: '1st October 2026',
    features: ['Results in 10 min', 'H. pylori antibodies', 'CE & IVD certified', 'Ulcer screening'],
    description: 'H. pylori bacteria infect over 60% of the Indian population and can cause gastritis, ulcers, and even stomach cancer if untreated. Our test detects H. pylori antibodies in blood.',
    whoIsItFor: ['Chronic stomach pain', 'Frequent acidity or heartburn', 'Nausea or bloating', 'Family history of ulcers', 'Unexplained weight loss'],
    howToTest: ['Wash hands', 'Clean fingertip', 'Prick finger', 'Collect blood', 'Apply to cassette', 'Add buffer', 'Read after 10 minutes'],
    howToReadResults: ['Two lines: H. pylori antibodies detected', 'Only C line: Not detected', 'Positive = consult gastroenterologist', 'Treatment is usually antibiotics', 'Retest after treatment'],
    reviews: [
        { name: 'Saurabh Mishra', location: 'Lucknow', rating: 5, date: '2025-10-28', comment: 'Had stomach issues for years. Finally identified H. pylori!', verified: true },
    ],
}

const petAllergy: Product = {
    id: 'pet-allergy', name: 'Pet Allergy Test', slug: 'pet-allergy',
    shortDescription: 'Check if you\'re allergic to pet dander.',
    price: 79, originalPrice: 179, currency: '₹', category: 'Wellness & Lifestyle',
    image: '/first image.webp', imageFolder: '/product/pet-allergy',
    rating: 4.5, reviewCount: 98, inStock: true, availableNow: false, launchDate: 'Coming Soon',
    features: ['Results in 10 min', 'IgE detection', 'CE & IVD certified', 'Cat & dog dander'],
    description: 'Pet allergies are triggered by proteins in animal dander, saliva, or urine. If you sneeze, get watery eyes, or have skin reactions around pets, this test can confirm.',
    whoIsItFor: ['Sneezing around pets', 'Watery/itchy eyes near animals', 'Skin rashes after contact', 'Considering getting a pet', 'Asthma triggered by animals'],
    howToTest: ['Wash hands', 'Clean fingertip', 'Prick finger', 'Collect blood', 'Apply to cassette', 'Add buffer', 'Read after 10 minutes'],
    howToReadResults: ['Two lines: Positive for pet allergy', 'Only C line: Not allergic', 'Intensity indicates severity', 'Consider antihistamines', 'Consult allergist'],
    reviews: [
        { name: 'Riya Sharma', location: 'Delhi', rating: 4, date: '2025-09-15', comment: 'Confirmed my suspicion about cat allergy. Now taking precautions.', verified: true },
    ],
}



// ——————————————————————————————————————————————
// CANCER MARKERS
// ——————————————————————————————————————————————

const psa: Product = {
    id: 'psa', name: 'PSA Prostate Test', slug: 'psa',
    shortDescription: 'Screen for prostate health at home.',
    price: 99, originalPrice: 299, currency: '₹', category: 'Cancer Markers',
    image: '/product/psa/1.webp', imageFolder: '/product/psa',
    rating: 4.8, reviewCount: 156, inStock: true, availableNow: false, launchDate: '1st October 2026',
    features: ['Results in 10 min', 'PSA marker', 'CE & IVD certified', 'Men\'s health'],
    description: 'PSA is produced by the prostate gland. Elevated levels may indicate enlargement, inflammation, or cancer. Regular screening is recommended for men over 50 (or 40 with family history).',
    whoIsItFor: ['Men over 50', 'Men over 40 with family history', 'Urinary symptoms', 'Private screening', 'Routine health checks'],
    howToTest: ['Wash hands', 'Clean fingertip', 'Prick finger', 'Collect blood', 'Apply to cassette', 'Add 2 drops buffer', 'Wait 10 minutes'],
    howToReadResults: ['Two lines: PSA below 4 ng/mL (normal)', 'Only C line: PSA may be elevated', 'Elevated ≠ cancer always', 'Further tests needed', 'Share with doctor'],
    reviews: [
        { name: 'Suresh Nair', location: 'Kochi', rating: 5, date: '2025-12-05', comment: 'At 55, regular screening gives peace of mind.', verified: true },
        { name: 'Manoj Tiwari', location: 'Delhi', rating: 4, date: '2025-11-10', comment: 'Results consistent with hospital test.', verified: true },
    ],
}

const crp: Product = {
    id: 'crp', name: 'CRP Inflammation Test', slug: 'crp',
    shortDescription: 'Detect inflammation levels in your body.',
    price: 89, originalPrice: 199, currency: '₹', category: 'Cancer Markers',
    image: '/product/crp/1.webp', imageFolder: '/product/crp',
    rating: 4.6, reviewCount: 123, inStock: true, availableNow: true,
    features: ['Results in 10 min', 'CRP marker', 'CE & IVD certified', 'Inflammation screening'],
    description: 'C-Reactive Protein (CRP) is produced by the liver in response to inflammation. Elevated CRP can indicate infections, autoimmune diseases, or cancer. A key marker for overall health assessment.',
    whoIsItFor: ['Unexplained fatigue', 'Joint pain or swelling', 'Monitoring autoimmune conditions', 'Post-surgery recovery', 'Heart disease risk assessment'],
    howToTest: ['Wash hands', 'Clean fingertip', 'Prick finger', 'Collect blood', 'Apply to cassette', 'Add buffer', 'Wait 10 minutes'],
    howToReadResults: ['Below 3 mg/L: Normal', '3-10 mg/L: Mild inflammation', 'Above 10 mg/L: Significant inflammation', 'Consult doctor for high levels', 'May need further investigation'],
    reviews: [
        { name: 'Dr. Parveen', location: 'Chandigarh', rating: 5, date: '2025-11-22', comment: 'Useful screening tool for my patients between visits.', verified: true },
    ],
}

// ——————————————————————————————————————————————
// INFECTIOUS DISEASES
// ——————————————————————————————————————————————

const dengue: Product = {
    id: 'dengue', name: 'Dengue NS1 + IgG/IgM Test', slug: 'dengue',
    shortDescription: 'Rapid dengue detection at home.',
    price: 79, originalPrice: 199, currency: '₹', category: 'Infectious Diseases',
    image: '/product/dengue/1.webp', imageFolder: '/product/dengue',
    rating: 4.6, reviewCount: 287, inStock: true, availableNow: false, launchDate: '1st October 2026',
    features: ['Results in 15 min', 'NS1 + Antibody', 'CE & IVD certified', 'Early detection'],
    description: 'Dengue is common in India during monsoon. Our combo test detects NS1 antigen (active infection in first 5 days) and IgG/IgM antibodies (current or past infection) from a single sample.',
    whoIsItFor: ['Sudden high fever during monsoon', 'Dengue-prone areas', 'Mosquito bites + symptoms', 'Family member has dengue', 'Quick screening before hospital'],
    howToTest: ['Clean fingertip', 'Prick finger', 'Collect blood', 'Apply to both wells', 'Add buffer drops', 'Wait 15 minutes'],
    howToReadResults: ['NS1+ IgM+: Active primary infection', 'NS1- IgM+: Possible infection (after day 5)', 'IgG+: Past or secondary infection', 'All negative: No dengue detected', 'Seek help if severe symptoms'],
    reviews: [
        { name: 'Arjun Menon', location: 'Mumbai', rating: 5, date: '2025-08-20', comment: 'Tested positive for NS1 during monsoon. Got to hospital early.', verified: true },
        { name: 'Lakshmi Rao', location: 'Hyderabad', rating: 4, date: '2025-09-15', comment: 'Negative result gave us peace of mind.', verified: true },
    ],
}

const hiv: Product = {
    id: 'hiv', name: 'HIV 1/2 Self Test', slug: 'hiv',
    shortDescription: 'Confidential HIV screening from home.',
    price: 99, originalPrice: 299, currency: '₹', category: 'Infectious Diseases',
    image: '/first image.webp', imageFolder: '/product/hiv',
    rating: 4.9, reviewCount: 523, inStock: true, availableNow: false, launchDate: '1st October 2026',
    features: ['Results in 15 min', 'HIV-1 & HIV-2', 'CE & IVD certified', 'WHO prequalified'],
    description: 'Confidential HIV-1/2 antibody screening via finger-prick. Based on WHO-prequalified technology with >99.5% sensitivity. Privacy is paramount — test at home without anyone knowing.',
    whoIsItFor: ['Know your status privately', 'Before new relationship', 'Healthcare workers', 'Pregnant women', 'Regular screening'],
    howToTest: ['Read instructions fully', 'Clean fingertip', 'Prick finger', 'Collect blood', 'Apply to cassette', 'Add buffer', 'Wait 15 min (not after 30)'],
    howToReadResults: ['Two lines: Reactive — need confirmatory test', 'One line (C): Non-reactive', 'No lines: Invalid', 'Reactive ≠ diagnosis', 'NACO helpline: 1097'],
    reviews: [
        { name: 'Anonymous', location: 'India', rating: 5, date: '2025-12-10', comment: 'Privacy was my biggest concern. Complete peace of mind at home.', verified: true },
        { name: 'Healthcare Worker', location: 'Delhi', rating: 5, date: '2025-11-25', comment: 'After needlestick exposure, incredibly reassuring.', verified: true },
    ],
}

const malaria: Product = {
    id: 'malaria', name: 'Malaria Pf/Pv Test', slug: 'malaria',
    shortDescription: 'Rapid malaria screening for P. falciparum & P. vivax.',
    price: 79, originalPrice: 199, currency: '₹', category: 'Infectious Diseases',
    image: '/product/malaria/1.webp', imageFolder: '/product/malaria',
    rating: 4.7, reviewCount: 198, inStock: true, availableNow: false, launchDate: '1st October 2026',
    features: ['Results in 15 min', 'Pf & Pv detection', 'CE & IVD certified', 'Rapid screening'],
    description: 'Malaria remains endemic in many parts of India. Our rapid test differentiates between P. falciparum (the more dangerous species) and P. vivax from a finger-prick blood sample.',
    whoIsItFor: ['High fever with chills', 'Travel to malaria-endemic areas', 'Mosquito bites + symptoms', 'Rural or semi-urban residents', 'Rapid screening needed'],
    howToTest: ['Clean fingertip', 'Prick finger', 'Collect blood', 'Apply to cassette', 'Add buffer drops', 'Wait 15 minutes'],
    howToReadResults: ['Pf line: P. falciparum detected', 'Pv line: P. vivax detected', 'Both lines: Mixed infection', 'Only C line: Negative', 'Seek treatment immediately if positive'],
    reviews: [
        { name: 'Ramesh Yadav', location: 'Odisha', rating: 5, date: '2025-07-15', comment: 'Detected P. vivax early. Treatment started same day.', verified: true },
    ],
}

// ——————————————————————————————————————————————
// CRITICAL / EMERGENCY
// ——————————————————————————————————————————————

const procalcitonin: Product = {
    id: 'procalcitonin', name: 'Procalcitonin Test', slug: 'procalcitonin',
    shortDescription: 'Early marker for bacterial infections and sepsis.',
    price: 99, originalPrice: 349, currency: '₹', category: 'Critical & Emergency',
    image: '/product/procalcitonin/1.webp', imageFolder: '/product/procalcitonin',
    rating: 4.8, reviewCount: 87, inStock: true, availableNow: false, launchDate: '1st October 2026',
    features: ['Results in 15 min', 'PCT marker', 'CE & IVD certified', 'Sepsis screening'],
    description: 'Procalcitonin (PCT) is elevated in bacterial infections and sepsis. It helps differentiate bacterial from viral infections, guiding antibiotic use. Critical for early sepsis detection.',
    whoIsItFor: ['Suspected bacterial infection', 'High fever not responding to treatment', 'ICU monitoring', 'Post-operative patients', 'Antibiotic guidance'],
    howToTest: ['Clean fingertip', 'Prick finger', 'Collect blood', 'Apply to cassette', 'Add buffer', 'Wait 15 minutes'],
    howToReadResults: ['Below 0.5 ng/mL: Low risk', '0.5-2: Possible infection', 'Above 2: High risk of sepsis', 'Seek immediate medical care if high', 'Guide antibiotic decisions'],
    reviews: [
        { name: 'Dr. Anita Raj', location: 'Mumbai', rating: 5, date: '2025-11-30', comment: 'Excellent point-of-care tool for emergency assessment.', verified: true },
    ],
}

const troponinI: Product = {
    id: 'troponin-i', name: 'Troponin I Test', slug: 'troponin-i',
    shortDescription: 'Rapid cardiac marker for heart attack screening.',
    price: 99, originalPrice: 399, currency: '₹', category: 'Critical & Emergency',
    image: '/product/troponin-i/1.webp', imageFolder: '/product/troponin-i',
    rating: 4.9, reviewCount: 76, inStock: true, availableNow: false, launchDate: '1st October 2026',
    features: ['Results in 15 min', 'cTnI marker', 'CE & IVD certified', 'Cardiac screening'],
    description: 'Cardiac Troponin I is released when heart muscle is damaged. Elevated levels strongly suggest heart attack or cardiac injury. This rapid test can be life-saving in emergencies.',
    whoIsItFor: ['Chest pain or discomfort', 'Shortness of breath', 'Suspected heart attack', 'Post-cardiac event monitoring', 'Emergency screening'],
    howToTest: ['Clean fingertip', 'Prick finger', 'Collect blood', 'Apply to cassette', 'Add buffer', 'Wait 15 minutes'],
    howToReadResults: ['Two lines: Elevated troponin — seek emergency care', 'Only C line: Normal range', 'This is an emergency screening tool', 'Call 108/112 if positive', 'Do not delay hospital visit'],
    reviews: [
        { name: 'Emergency Doctor', location: 'Mumbai', rating: 5, date: '2025-12-08', comment: 'Invaluable for rapid triage in emergency settings.', verified: true },
    ],
}

const troponinT: Product = {
    id: 'troponin-t', name: 'Troponin T Test', slug: 'troponin-t',
    shortDescription: 'High-sensitivity cardiac troponin T screening.',
    price: 99, originalPrice: 399, currency: '₹', category: 'Critical & Emergency',
    image: '/product/troponin-t/1.webp', imageFolder: '/product/troponin-t',
    rating: 4.8, reviewCount: 64, inStock: true, availableNow: true,
    features: ['Results in 15 min', 'cTnT marker', 'CE & IVD certified', 'Cardiac emergency'],
    description: 'Troponin T is another cardiac-specific marker released during heart muscle damage. Combined with clinical symptoms, it helps in rapid assessment of acute coronary events.',
    whoIsItFor: ['Chest pain symptoms', 'Arm or jaw pain', 'Known heart conditions', 'Family history of heart attack', 'Emergency assessment'],
    howToTest: ['Clean fingertip', 'Prick finger', 'Collect blood', 'Apply to cassette', 'Add buffer', 'Wait 15 minutes'],
    howToReadResults: ['Two lines: Elevated — emergency', 'Only C line: Normal range', 'Positive = call ambulance immediately', 'Use as screening only', 'Hospital confirmation needed'],
    reviews: [
        { name: 'Cardiology Nurse', location: 'Pune', rating: 5, date: '2025-11-14', comment: 'Quick screening helps us prioritize patients effectively.', verified: true },
    ],
}

// ——————————————————————————————————————————————
// LIFESTYLE & SCREENING
// ——————————————————————————————————————————————

const drugsOfAbuse: Product = {
    id: 'drugs-of-abuse', name: 'Drugs of Abuse Test', slug: 'drugs-of-abuse',
    shortDescription: 'Multi-panel drug screening test.',
    price: 99, originalPrice: 299, currency: '₹', category: 'Lifestyle & Screening',
    image: '/product/drugs-of-abuse/1.png', imageFolder: '/product/drugs-of-abuse',
    rating: 4.5, reviewCount: 92, inStock: true, availableNow: false, launchDate: '1st October 2026',
    features: ['Results in 10 min', 'Multi-panel', 'CE & IVD certified', 'Urine-based'],
    description: 'Multi-panel rapid screening test for common drugs of abuse. Used for workplace screening, parental monitoring, and rehabilitation programs. Detects multiple substance categories.',
    whoIsItFor: ['Pre-employment screening', 'Parental concern', 'Rehabilitation monitoring', 'Sports testing', 'Personal screening'],
    howToTest: ['Collect urine sample in cup', 'Dip test strip for 10 seconds', 'Remove and place flat', 'Wait 5-10 minutes', 'Read results within 10 minutes'],
    howToReadResults: ['Two lines per panel: Negative for that substance', 'One line per panel: Positive (preliminary)', 'Confirm positives with lab test', 'Results are screening only', 'Consult medical professional'],
    reviews: [
        { name: 'HR Manager', location: 'Bangalore', rating: 4, date: '2025-10-20', comment: 'Efficient for pre-employment screening. Quick results.', verified: true },
    ],
}

// ——————————————————————————————————————————————
// EXPORTS
// ——————————————————————————————————————————————

// Hidden tests: hiv, drugsOfAbuse, triglycerides, lactose, hPylori, petAllergy, dustAllergy
export const products: Product[] = [
    vitaminD, vitaminB12, ferritin, tsh, hba1c, cholesterol,
    psa, crp,
    dengue, malaria,
    procalcitonin, troponinI, troponinT,
]

export const categories = [
    'All',
    'Wellness & Lifestyle',
    'Cancer Markers',
    'Infectious Diseases',
    'Critical & Emergency',
]

export function getProduct(id: string): Product | undefined {
    return products.find(p => p.id === id || p.slug === id)
}

export function getProductsByCategory(category: string): Product[] {
    if (category === 'All') return products
    return products.filter(p => p.category === category)
}

export function getRelatedProducts(productId: string, limit = 3): Product[] {
    const product = getProduct(productId)
    if (!product) return products.slice(0, limit)
    return products
        .filter(p => p.id !== productId && p.category === product.category)
        .concat(products.filter(p => p.id !== productId && p.category !== product.category))
        .slice(0, limit)
}
