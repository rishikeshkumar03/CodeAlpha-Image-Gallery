/**
 * ============================================================================
 * CODE ALPHA STUDIO — NEXT-GEN INTERACTIVE IMAGE GALLERY
 * Production-ready Vanilla JavaScript Engine
 * ============================================================================
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. CURATED IMAGE DATASET (18 Hand-Picked High-Resolution Photographs)
  // --------------------------------------------------------------------------
  const GALLERY_DATA = [
    {
      id: 1,
      title: 'Misty Alpine Wilderness',
      category: 'nature',
      categoryName: 'Nature',
      author: 'Bailey Zindel',
      location: 'Yosemite Valley, USA',
      aspect: 'tall',
      url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=85',
      thumb: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      description: 'Ethereal morning mist weaving through ancient pine forests against dramatic granite peaks.'
    },
    {
      id: 2,
      title: 'Curvilinear Parametric Facade',
      category: 'architecture',
      categoryName: 'Architecture',
      author: 'Simone Hutsch',
      location: 'Rotterdam, Netherlands',
      aspect: 'tall',
      url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85',
      thumb: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      description: 'Bold contemporary geometric architecture showcasing flowing white curves and rhythmic shadow patterns.'
    },
    {
      id: 3,
      title: 'Quantum Optical Processor',
      category: 'technology',
      categoryName: 'Technology',
      author: 'Alexandre Debiève',
      location: 'Silicon Valley, USA',
      aspect: 'wide',
      url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85',
      thumb: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      description: 'Illuminated microcircuitry channels glowing with cyan and violet light pulses.'
    },
    {
      id: 4,
      title: 'Neon Noir Studio Portrait',
      category: 'portraits',
      categoryName: 'Portraits',
      author: 'Aiony Haust',
      location: 'London, UK',
      aspect: 'tall',
      url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1400&q=85',
      thumb: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
      description: 'Striking cinematic portrait illuminated by warm amber and deep cyan duotone rim lighting.'
    },
    {
      id: 5,
      title: 'Hot Air Balloons over Goreme',
      category: 'travel',
      categoryName: 'Travel',
      author: 'Yonatan Mirgoli',
      location: 'Cappadocia, Turkey',
      aspect: 'wide',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85',
      thumb: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      description: 'Golden sunrise over volcanic fairy chimneys with scores of hot air balloons drifting peacefully.'
    },
    {
      id: 6,
      title: 'Emerald Glacial Lake',
      category: 'nature',
      categoryName: 'Nature',
      author: 'Kal Vis',
      location: 'Banff National Park, Canada',
      aspect: 'square',
      url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1400&q=85',
      thumb: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80',
      description: 'Pristine turquoise water reflecting snow-dusted alpine ranges in sheer untouched tranquility.'
    },
    {
      id: 7,
      title: 'Minimalist Spiral Geometry',
      category: 'architecture',
      categoryName: 'Architecture',
      author: 'Dan Freeman',
      location: 'Berlin, Germany',
      aspect: 'tall',
      url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=85',
      thumb: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      description: 'Hypnotic vertigo perspective looking down an exquisite concrete spiral staircase.'
    },
    {
      id: 8,
      title: 'Synthetic Neural Matrix',
      category: 'technology',
      categoryName: 'Technology',
      author: 'Markus Spiske',
      location: 'Copenhagen, Denmark',
      aspect: 'tall',
      url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1400&q=85',
      thumb: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
      description: 'Cascade of cascading green alphanumeric code across ultra-high refresh rate displays.'
    },
    {
      id: 9,
      title: 'Monochrome Character Study',
      category: 'portraits',
      categoryName: 'Portraits',
      author: 'Jurica Koletić',
      location: 'Zagreb, Croatia',
      aspect: 'wide',
      url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1400&q=85',
      thumb: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      description: 'Deep contrast black and white portrait capturing raw emotional expression and character lines.'
    },
    {
      id: 10,
      title: 'Historic Lantern Alleyway',
      category: 'travel',
      categoryName: 'Travel',
      author: 'Sora Sagano',
      location: 'Kyoto, Japan',
      aspect: 'tall',
      url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1400&q=85',
      thumb: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
      description: 'Atmospheric twilight in Gion with glowing paper lanterns illuminating cobblestone walkways.'
    },
    {
      id: 11,
      title: 'Golden Sunset Sand Dunes',
      category: 'nature',
      categoryName: 'Nature',
      author: 'Jeremy Bishop',
      location: 'Sahara Desert, Morocco',
      aspect: 'wide',
      url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1400&q=85',
      thumb: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
      description: 'Sculptural wind-swept sand ridges cast into dramatic shadows under the sinking sun.'
    },
    {
      id: 12,
      title: 'Cyberpunk Skyscraper Canyon',
      category: 'architecture',
      categoryName: 'Architecture',
      author: 'Sean Pollock',
      location: 'Tokyo, Japan',
      aspect: 'tall',
      url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85',
      thumb: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      description: 'Glass monolith skyscrapers soaring into a moody metropolis overcast sky.'
    },
    {
      id: 13,
      title: 'Humanoid Bionic Precision',
      category: 'technology',
      categoryName: 'Technology',
      author: 'Possessed Photography',
      location: 'Zurich, Switzerland',
      aspect: 'square',
      url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1400&q=85',
      thumb: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
      description: 'Articulated robotic hand and sensory interface demonstrating futuristic ergonomics.'
    },
    {
      id: 14,
      title: 'Soulful Golden Hour Glow',
      category: 'portraits',
      categoryName: 'Portraits',
      author: 'Courtney Cook',
      location: 'Los Angeles, USA',
      aspect: 'tall',
      url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=85',
      thumb: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
      description: 'Warm natural sunlight illuminating delicate features in an authentic lifestyle portrait.'
    },
    {
      id: 15,
      title: 'Amalfi Coastal Cliffside',
      category: 'travel',
      categoryName: 'Travel',
      author: 'Leio McLaren',
      location: 'Positano, Italy',
      aspect: 'wide',
      url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1400&q=85',
      thumb: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
      description: 'Pastel Mediterranean villas perched dramatically above azure waters and sun-bleached cliffs.'
    },
    {
      id: 16,
      title: 'Cascading Forest Waterfall',
      category: 'nature',
      categoryName: 'Nature',
      author: 'Thomas Shellberg',
      location: 'Olympic National Park, USA',
      aspect: 'tall',
      url: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1400&q=85',
      thumb: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80',
      description: 'Silky long-exposure waterfall cascading through dense moss-draped temperate rainforest.'
    },
    {
      id: 17,
      title: 'Brutalist Angular Monolith',
      category: 'architecture',
      categoryName: 'Architecture',
      author: 'Chuttersnap',
      location: 'London, UK',
      aspect: 'square',
      url: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1400&q=85',
      thumb: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80',
      description: 'Raw concrete geometry, bold diagonal overhangs, and striking architectural shadow play.'
    },
    {
      id: 18,
      title: 'Graceful Fine Art Portrait',
      category: 'portraits',
      categoryName: 'Portraits',
      author: 'Good Faces Agency',
      location: 'Paris, France',
      aspect: 'tall',
      url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=85',
      thumb: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
      description: 'Refined editorial portrait characterized by gentle studio diffusion and expressive gaze.'
    },
    {
      id: 19,
      title: 'CODE ALPHA STUDIO Lead Developer',
      category: 'portraits',
      categoryName: 'Portraits',
      author: 'CODE ALPHA STUDIO',
      location: 'Studio HQ',
      aspect: 'tall',
      url: 'HERO PIC.png',
      thumb: 'HERO PIC.png',
      description: 'Lead Developer and Creative Engineer at CODE ALPHA STUDIO featuring bold neon red typography.'
    }
  ];

  // Fallback SVG data placeholder in case of image network errors
  const FALLBACK_IMAGE_DATA = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600" fill="#0d111e">
      <rect width="100%" height="100%" fill="#0d111e"/>
      <circle cx="400" cy="270" r="60" fill="#1e2538"/>
      <polygon points="260,430 350,330 420,400 480,350 540,430" fill="#1e2538"/>
      <text x="400" y="490" fill="#64748b" font-family="sans-serif" font-size="20" font-weight="600" text-anchor="middle">Image Unavailable (Offline)</text>
    </svg>
  `);

  // --------------------------------------------------------------------------
  // 2. STATE MANAGEMENT
  // --------------------------------------------------------------------------
  const state = {
    activeCategory: 'all',
    searchQuery: '',
    activeLayout: 'masonry',
    favorites: loadFavorites(),
    filteredImages: [...GALLERY_DATA],
    lightboxIndex: 0,
    isLightboxOpen: false
  };

  function loadFavorites() {
    try {
      const stored = localStorage.getItem('codealpha_favorites') || localStorage.getItem('pixora_favorites');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.warn('LocalStorage unavailable, defaulting to empty favorites', e);
      return [];
    }
  }

  function saveFavorites() {
    try {
      localStorage.setItem('codealpha_favorites', JSON.stringify(state.favorites));
    } catch (e) {
      console.warn('Failed to persist favorites to LocalStorage', e);
    }
  }

  // --------------------------------------------------------------------------
  // 3. DOM ELEMENTS
  // --------------------------------------------------------------------------
  const DOM = {
    // Header & Nav
    header: document.getElementById('header'),
    mainNav: document.getElementById('mainNav'),
    hamburgerBtn: document.getElementById('hamburgerBtn'),
    headerFavoritesBtn: document.getElementById('headerFavoritesBtn'),
    headerFavCount: document.getElementById('headerFavCount'),
    scrollProgressBar: document.getElementById('scrollProgressBar'),
    navLinks: document.querySelectorAll('.nav-link'),

    // Hero
    heroExploreBtn: document.getElementById('heroExploreBtn'),
    heroQuickViewBtn: document.getElementById('heroQuickViewBtn'),

    // Gallery
    galleryGrid: document.getElementById('galleryGrid'),
    filterButtons: document.querySelectorAll('.filter-btn'),
    gallerySearchInput: document.getElementById('gallerySearchInput'),
    clearSearchBtn: document.getElementById('clearSearchBtn'),
    layoutButtons: document.querySelectorAll('.layout-btn'),
    galleryStatusBar: document.getElementById('galleryStatusBar'),
    statusSummaryText: document.getElementById('statusSummaryText'),
    resetFiltersBtn: document.getElementById('resetFiltersBtn'),
    emptyState: document.getElementById('emptyState'),
    emptyResetBtn: document.getElementById('emptyResetBtn'),

    // Category count badges
    countAll: document.getElementById('countAll'),
    countNature: document.getElementById('countNature'),
    countArchitecture: document.getElementById('countArchitecture'),
    countTechnology: document.getElementById('countTechnology'),
    countPortraits: document.getElementById('countPortraits'),
    countTravel: document.getElementById('countTravel'),
    countFavorites: document.getElementById('countFavorites'),

    // Collections
    collectionButtons: document.querySelectorAll('[data-category-link]'),
    collectionCards: document.querySelectorAll('.collection-card'),
    footerCategoryLinks: document.querySelectorAll('.footer-cat-link'),

    // Lightbox
    lightboxModal: document.getElementById('lightboxModal'),
    lightboxBackdrop: document.getElementById('lightboxBackdrop'),
    lbImage: document.getElementById('lbImage'),
    lbLoader: document.getElementById('lbLoader'),
    lbTitle: document.getElementById('lbTitle'),
    lbCategory: document.getElementById('lbCategory'),
    lbAuthor: document.getElementById('lbAuthor'),
    lbDesc: document.getElementById('lbDesc'),
    lbCurrentIndex: document.getElementById('lbCurrentIndex'),
    lbTotalCount: document.getElementById('lbTotalCount'),
    lbPrevBtn: document.getElementById('lbPrevBtn'),
    lbNextBtn: document.getElementById('lbNextBtn'),
    lbCloseBtn: document.getElementById('lbCloseBtn'),
    lbFavoriteBtn: document.getElementById('lbFavoriteBtn'),
    lbDownloadBtn: document.getElementById('lbDownloadBtn'),

    // Toast
    toast: document.getElementById('toastNotification'),
    toastMessage: document.getElementById('toastMessage'),
    toastIcon: document.getElementById('toastIcon'),

    // Stats Counters
    statCounters: document.querySelectorAll('.stat-counter'),

    // Footer
    backToTopBtn: document.getElementById('backToTopBtn'),
    newsletterForm: document.getElementById('newsletterForm'),
    newsletterEmail: document.getElementById('newsletterEmail'),
    currentYear: document.getElementById('currentYear')
  };

  // --------------------------------------------------------------------------
  // 4. INITIALIZATION
  // --------------------------------------------------------------------------
  function init() {
    updateCategoryCountBadges();
    updateFavoritesUI();
    renderGallery();
    initEventListeners();
    initScrollInteractions();
    initAnimatedStats();
    if (DOM.currentYear) {
      DOM.currentYear.textContent = new Date().getFullYear();
    }
  }

  // --------------------------------------------------------------------------
  // 5. GALLERY RENDERING & FILTERING
  // --------------------------------------------------------------------------
  function filterAndSearchData() {
    let results = GALLERY_DATA;

    // Filter by Category or Favorites
    if (state.activeCategory === 'favorites') {
      results = results.filter(img => state.favorites.includes(img.id));
    } else if (state.activeCategory !== 'all') {
      results = results.filter(img => img.category.toLowerCase() === state.activeCategory.toLowerCase());
    }

    // Filter by Search Query
    if (state.searchQuery.trim() !== '') {
      const q = state.searchQuery.toLowerCase().trim();
      results = results.filter(img =>
        img.title.toLowerCase().includes(q) ||
        img.author.toLowerCase().includes(q) ||
        img.location.toLowerCase().includes(q) ||
        img.categoryName.toLowerCase().includes(q) ||
        img.description.toLowerCase().includes(q)
      );
    }

    state.filteredImages = results;
    return results;
  }

  function renderGallery() {
    const images = filterAndSearchData();
    DOM.galleryGrid.innerHTML = '';

    // Handle Empty State
    if (images.length === 0) {
      DOM.emptyState.style.display = 'block';
      DOM.galleryStatusBar.style.display = 'flex';
      DOM.statusSummaryText.textContent = `No images found for the active filter.`;
      DOM.resetFiltersBtn.style.display = 'inline-block';
      return;
    }

    DOM.emptyState.style.display = 'none';
    DOM.galleryStatusBar.style.display = 'flex';

    // Summary text
    const totalCount = GALLERY_DATA.length;
    if (state.activeCategory === 'favorites') {
      DOM.statusSummaryText.textContent = `Showing ${images.length} liked ${images.length === 1 ? 'photograph' : 'photographs'}`;
      DOM.resetFiltersBtn.style.display = 'inline-block';
    } else if (state.searchQuery.trim() !== '') {
      DOM.statusSummaryText.textContent = `Showing ${images.length} of ${totalCount} photographs matching "${state.searchQuery}"`;
      DOM.resetFiltersBtn.style.display = 'inline-block';
    } else if (state.activeCategory !== 'all') {
      DOM.statusSummaryText.textContent = `Showing ${images.length} photographs in ${state.activeCategory.charAt(0).toUpperCase() + state.activeCategory.slice(1)}`;
      DOM.resetFiltersBtn.style.display = 'inline-block';
    } else {
      DOM.statusSummaryText.textContent = `Showing all ${totalCount} photographs`;
      DOM.resetFiltersBtn.style.display = 'none';
    }

    // Create Cards
    const fragment = document.createDocumentFragment();

    images.forEach((item, index) => {
      const card = document.createElement('article');
      card.className = 'gallery-card';
      card.setAttribute('data-id', item.id);
      card.setAttribute('data-category', item.category);
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `View ${item.title} by ${item.author}`);

      const isFav = state.favorites.includes(item.id);

      card.innerHTML = `
        <div class="card-image-wrap">
          <img 
            src="${item.thumb}" 
            alt="${item.title} - ${item.description}" 
            class="gallery-image"
            loading="lazy"
            decoding="async"
          />
          <div class="card-overlay">
            <div class="card-overlay-top">
              <span class="card-category-tag">${item.categoryName}</span>
              <button class="card-action-btn card-favorite-btn ${isFav ? 'active' : ''}" data-fav-id="${item.id}" aria-label="${isFav ? 'Remove from favorites' : 'Add to favorites'}" title="${isFav ? 'Liked' : 'Like'}">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
            </div>

            <div class="card-overlay-center">
              <div class="view-image-pill">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  <line x1="11" y1="8" x2="11" y2="14"></line>
                  <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
                <span>View Image</span>
              </div>
            </div>

            <div class="card-overlay-bottom">
              <h3 class="card-title">${item.title}</h3>
              <div class="card-meta-line">
                <span class="card-photographer">by ${item.author}</span>
                <span class="card-location">${item.location}</span>
              </div>
            </div>
          </div>
        </div>
      `;

      // Image error handling fallback
      const imgEl = card.querySelector('.gallery-image');
      imgEl.addEventListener('error', function () {
        this.src = FALLBACK_IMAGE_DATA;
      });

      // Card click opens Lightbox (unless favorite button was clicked)
      card.addEventListener('click', (e) => {
        if (e.target.closest('.card-favorite-btn')) {
          e.stopPropagation();
          const favBtn = e.target.closest('.card-favorite-btn');
          const id = parseInt(favBtn.getAttribute('data-fav-id'), 10);
          toggleFavorite(id);
          return;
        }
        openLightbox(index);
      });

      // Accessible keyboard Enter/Space key support
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(index);
        }
      });

      fragment.appendChild(card);
    });

    DOM.galleryGrid.appendChild(fragment);
  }

  function updateCategoryCountBadges() {
    const counts = {
      all: GALLERY_DATA.length,
      nature: 0,
      architecture: 0,
      technology: 0,
      portraits: 0,
      travel: 0
    };

    GALLERY_DATA.forEach(img => {
      if (counts[img.category] !== undefined) {
        counts[img.category]++;
      }
    });

    if (DOM.countAll) DOM.countAll.textContent = counts.all;
    if (DOM.countNature) DOM.countNature.textContent = counts.nature;
    if (DOM.countArchitecture) DOM.countArchitecture.textContent = counts.architecture;
    if (DOM.countTechnology) DOM.countTechnology.textContent = counts.technology;
    if (DOM.countPortraits) DOM.countPortraits.textContent = counts.portraits;
    if (DOM.countTravel) DOM.countTravel.textContent = counts.travel;
  }

  function updateFavoritesUI() {
    const count = state.favorites.length;
    if (DOM.countFavorites) DOM.countFavorites.textContent = count;
    if (DOM.headerFavCount) DOM.headerFavCount.textContent = count;
  }

  // --------------------------------------------------------------------------
  // 6. FAVORITES HANDLING
  // --------------------------------------------------------------------------
  function toggleFavorite(id) {
    const index = state.favorites.indexOf(id);
    const item = GALLERY_DATA.find(img => img.id === id);
    const title = item ? item.title : 'Photo';

    if (index > -1) {
      state.favorites.splice(index, 1);
      showToast(`Removed "${title}" from favorites`, '♥');
    } else {
      state.favorites.push(id);
      showToast(`Saved "${title}" to favorites!`, '♥');
    }

    saveFavorites();
    updateFavoritesUI();

    // If active category is favorites, re-render immediately
    if (state.activeCategory === 'favorites') {
      renderGallery();
    } else {
      // Otherwise update current card buttons
      const cardFavBtns = document.querySelectorAll(`.card-favorite-btn[data-fav-id="${id}"]`);
      const isFav = state.favorites.includes(id);
      cardFavBtns.forEach(btn => {
        btn.classList.toggle('active', isFav);
        const svg = btn.querySelector('svg');
        if (svg) svg.setAttribute('fill', isFav ? 'currentColor' : 'none');
      });
    }

    // Update Lightbox favorite button if active
    if (state.isLightboxOpen) {
      const activeImg = state.filteredImages[state.lightboxIndex];
      if (activeImg && activeImg.id === id) {
        const isFav = state.favorites.includes(id);
        DOM.lbFavoriteBtn.classList.toggle('active', isFav);
        const svg = DOM.lbFavoriteBtn.querySelector('svg');
        if (svg) svg.setAttribute('fill', isFav ? 'currentColor' : 'none');
      }
    }
  }

  // --------------------------------------------------------------------------
  // 7. LIGHTBOX IMAGE VIEWER
  // --------------------------------------------------------------------------
  function openLightbox(index) {
    if (!state.filteredImages || state.filteredImages.length === 0) return;

    state.lightboxIndex = Math.max(0, Math.min(index, state.filteredImages.length - 1));
    state.isLightboxOpen = true;

    DOM.lightboxModal.classList.add('active');
    document.body.classList.add('lightbox-open');

    updateLightboxContent();

    // Give focus to modal for accessible keyboard handling
    DOM.lightboxModal.focus();
  }

  function closeLightbox() {
    state.isLightboxOpen = false;
    DOM.lightboxModal.classList.remove('active');
    document.body.classList.remove('lightbox-open');
  }

  function updateLightboxContent() {
    const item = state.filteredImages[state.lightboxIndex];
    if (!item) return;

    // Show loading indicator
    DOM.lbLoader.classList.add('active');
    DOM.lbImage.classList.add('fade-out');

    // Preload image
    const tempImg = new Image();
    tempImg.src = item.url;

    tempImg.onload = () => {
      DOM.lbImage.src = item.url;
      DOM.lbImage.alt = `${item.title} - ${item.author}`;
      DOM.lbLoader.classList.remove('active');
      DOM.lbImage.classList.remove('fade-out');
    };

    tempImg.onerror = () => {
      DOM.lbImage.src = FALLBACK_IMAGE_DATA;
      DOM.lbLoader.classList.remove('active');
      DOM.lbImage.classList.remove('fade-out');
    };

    // Update metadata
    DOM.lbTitle.textContent = item.title;
    DOM.lbCategory.textContent = item.categoryName;
    DOM.lbAuthor.textContent = `by ${item.author} • ${item.location}`;
    DOM.lbDesc.textContent = item.description;

    DOM.lbCurrentIndex.textContent = state.lightboxIndex + 1;
    DOM.lbTotalCount.textContent = state.filteredImages.length;

    // Update download link
    DOM.lbDownloadBtn.href = item.url;

    // Update favorite state in lightbox
    const isFav = state.favorites.includes(item.id);
    DOM.lbFavoriteBtn.classList.toggle('active', isFav);
    const favSvg = DOM.lbFavoriteBtn.querySelector('svg');
    if (favSvg) favSvg.setAttribute('fill', isFav ? 'currentColor' : 'none');
  }

  function nextLightboxImage() {
    if (state.filteredImages.length <= 1) return;
    state.lightboxIndex = (state.lightboxIndex + 1) % state.filteredImages.length;
    updateLightboxContent();
  }

  function prevLightboxImage() {
    if (state.filteredImages.length <= 1) return;
    state.lightboxIndex = (state.lightboxIndex - 1 + state.filteredImages.length) % state.filteredImages.length;
    updateLightboxContent();
  }

  // --------------------------------------------------------------------------
  // 8. TOAST NOTIFICATIONS
  // --------------------------------------------------------------------------
  let toastTimeout = null;

  function showToast(message, icon = '✓') {
    if (!DOM.toast) return;

    DOM.toastMessage.textContent = message;
    DOM.toastIcon.textContent = icon;
    DOM.toast.classList.add('active');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      DOM.toast.classList.remove('active');
    }, 3200);
  }

  // --------------------------------------------------------------------------
  // 9. ANIMATED STATS COUNTERS (IntersectionObserver)
  // --------------------------------------------------------------------------
  function initAnimatedStats() {
    if (!DOM.statCounters || DOM.statCounters.length === 0) return;

    let hasAnimated = false;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          startCounting();
          observer.disconnect();
        }
      });
    }, { threshold: 0.35 });

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }
  }

  function startCounting() {
    DOM.statCounters.forEach(counter => {
      const target = parseFloat(counter.getAttribute('data-target'));
      const isDecimal = counter.getAttribute('data-decimal') === 'true';
      const duration = 2000;
      const startTime = performance.now();

      function updateNumber(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease Out Quart
        const ease = 1 - Math.pow(1 - progress, 4);

        const currentVal = target * ease;

        if (isDecimal) {
          counter.textContent = currentVal.toFixed(1);
        } else {
          counter.textContent = Math.floor(currentVal).toLocaleString();
        }

        if (progress < 1) {
          requestAnimationFrame(updateNumber);
        } else {
          counter.textContent = isDecimal ? target.toFixed(1) : Math.floor(target).toLocaleString();
        }
      }

      requestAnimationFrame(updateNumber);
    });
  }

  // --------------------------------------------------------------------------
  // 10. SCROLL PROGRESS & STICKY HEADER
  // --------------------------------------------------------------------------
  function initScrollInteractions() {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      // Scroll Progress Bar
      if (DOM.scrollProgressBar) {
        DOM.scrollProgressBar.style.width = `${scrollPercent}%`;
      }

      // Header blur & shadow
      if (DOM.header) {
        DOM.header.classList.toggle('scrolled', scrollTop > 40);
      }

      // Back to Top button visibility
      if (DOM.backToTopBtn) {
        DOM.backToTopBtn.style.opacity = scrollTop > 400 ? '1' : '0.6';
      }

      // Active Navigation Link on Scroll
      highlightActiveNavLink();
    }, { passive: true });
  }

  function highlightActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          DOM.navLinks.forEach(link => link.classList.remove('active'));
          navLink.classList.add('active');
        }
      }
    });
  }

  // --------------------------------------------------------------------------
  // 11. EVENT LISTENERS
  // --------------------------------------------------------------------------
  function initEventListeners() {
    // A. Category Filter Buttons
    DOM.filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-category');
        setCategoryFilter(category);
      });
    });

    // B. Search Bar
    if (DOM.gallerySearchInput) {
      DOM.gallerySearchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        if (DOM.clearSearchBtn) {
          DOM.clearSearchBtn.style.display = state.searchQuery ? 'flex' : 'none';
        }
        renderGallery();
      });
    }

    if (DOM.clearSearchBtn) {
      DOM.clearSearchBtn.addEventListener('click', () => {
        state.searchQuery = '';
        DOM.gallerySearchInput.value = '';
        DOM.clearSearchBtn.style.display = 'none';
        DOM.gallerySearchInput.focus();
        renderGallery();
      });
    }

    // C. Layout Toggle Buttons
    DOM.layoutButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const layout = btn.getAttribute('data-layout');
        setLayout(layout);
      });
    });

    // D. Header Favorites Pill Button
    if (DOM.headerFavoritesBtn) {
      DOM.headerFavoritesBtn.addEventListener('click', () => {
        setCategoryFilter('favorites');
        smoothScrollTo('#gallery');
      });
    }

    // E. Reset Filters Buttons
    if (DOM.resetFiltersBtn) {
      DOM.resetFiltersBtn.addEventListener('click', resetAllFilters);
    }
    if (DOM.emptyResetBtn) {
      DOM.emptyResetBtn.addEventListener('click', resetAllFilters);
    }

    // F. Featured Collections Cards & Buttons
    DOM.collectionButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const cat = btn.getAttribute('data-category-link');
        setCategoryFilter(cat);
        smoothScrollTo('#gallery');
      });
    });

    DOM.collectionCards.forEach(card => {
      card.addEventListener('click', () => {
        const cat = card.getAttribute('data-target-category');
        setCategoryFilter(cat);
        smoothScrollTo('#gallery');
      });
    });

    // G. Footer Category Links
    DOM.footerCategoryLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const cat = link.getAttribute('data-cat');
        setCategoryFilter(cat);
        smoothScrollTo('#gallery');
      });
    });

    // H. Hero Buttons
    if (DOM.heroExploreBtn) {
      DOM.heroExploreBtn.addEventListener('click', (e) => {
        e.preventDefault();
        smoothScrollTo('#gallery');
      });
    }

    function openHeroInLightbox() {
      const devImgIndex = state.filteredImages.findIndex(img => img.id === 19);
      if (devImgIndex !== -1) {
        openLightbox(devImgIndex);
      } else {
        setCategoryFilter('all');
        const idx = state.filteredImages.findIndex(img => img.id === 19);
        openLightbox(idx !== -1 ? idx : 0);
      }
    }

    if (DOM.heroQuickViewBtn) {
      DOM.heroQuickViewBtn.addEventListener('click', openHeroInLightbox);
    }

    const heroImgEl = document.getElementById('heroPreviewImg');
    if (heroImgEl) {
      heroImgEl.style.cursor = 'pointer';
      heroImgEl.addEventListener('click', openHeroInLightbox);
    }

    // I. Mobile Hamburger Menu
    if (DOM.hamburgerBtn) {
      DOM.hamburgerBtn.addEventListener('click', () => {
        const isOpen = DOM.mainNav.classList.toggle('active');
        DOM.hamburgerBtn.classList.toggle('active', isOpen);
        DOM.hamburgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        document.body.classList.toggle('menu-open', isOpen);
      });
    }

    // Close mobile menu when clicking nav links
    DOM.navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (DOM.mainNav.classList.contains('active')) {
          DOM.mainNav.classList.remove('active');
          DOM.hamburgerBtn.classList.remove('active');
          DOM.hamburgerBtn.setAttribute('aria-expanded', 'false');
          document.body.classList.remove('menu-open');
        }
      });
    });

    // J. Lightbox Controls
    if (DOM.lbNextBtn) DOM.lbNextBtn.addEventListener('click', nextLightboxImage);
    if (DOM.lbPrevBtn) DOM.lbPrevBtn.addEventListener('click', prevLightboxImage);
    if (DOM.lbCloseBtn) DOM.lbCloseBtn.addEventListener('click', closeLightbox);
    if (DOM.lbBackdrop) DOM.lbBackdrop.addEventListener('click', closeLightbox);

    if (DOM.lbFavoriteBtn) {
      DOM.lbFavoriteBtn.addEventListener('click', () => {
        const item = state.filteredImages[state.lightboxIndex];
        if (item) toggleFavorite(item.id);
      });
    }

    // K. Keyboard Controls (Esc, Left, Right, L/F for like)
    document.addEventListener('keydown', (e) => {
      if (!state.isLightboxOpen) return;

      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        nextLightboxImage();
      } else if (e.key === 'ArrowLeft') {
        prevLightboxImage();
      } else if (e.key === 'l' || e.key === 'L' || e.key === 'f' || e.key === 'F') {
        const item = state.filteredImages[state.lightboxIndex];
        if (item) toggleFavorite(item.id);
      }
    });

    // L. Touch Swipe Support for Lightbox (Mobile)
    let touchStartX = 0;
    let touchEndX = 0;

    if (DOM.lightboxModal) {
      DOM.lightboxModal.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      DOM.lightboxModal.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipeGesture();
      }, { passive: true });
    }

    function handleSwipeGesture() {
      const diffX = touchEndX - touchStartX;
      const swipeThreshold = 50; // minimum distance in px

      if (diffX > swipeThreshold) {
        // Swiped right -> Previous image
        prevLightboxImage();
      } else if (diffX < -swipeThreshold) {
        // Swiped left -> Next image
        nextLightboxImage();
      }
    }

    // M. Back to Top Button
    if (DOM.backToTopBtn) {
      DOM.backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }

    // N. Newsletter Submission
    if (DOM.newsletterForm) {
      DOM.newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = DOM.newsletterEmail.value.trim();
        if (email) {
          showToast(`Subscribed! Check ${email} for updates.`, '✉');
          DOM.newsletterEmail.value = '';
        }
      });
    }
  }

  // --------------------------------------------------------------------------
  // 12. HELPER FUNCTIONS
  // --------------------------------------------------------------------------
  function setCategoryFilter(category) {
    state.activeCategory = category;

    // Update filter buttons active class
    DOM.filterButtons.forEach(btn => {
      const btnCat = btn.getAttribute('data-category');
      const isActive = btnCat === category;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    renderGallery();
  }

  function setLayout(layout) {
    state.activeLayout = layout;

    // Update layout buttons
    DOM.layoutButtons.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-layout') === layout);
    });

    // Update gallery grid classes
    DOM.galleryGrid.classList.remove('layout-masonry', 'layout-grid', 'layout-compact');
    DOM.galleryGrid.classList.add(`layout-${layout}`);
  }

  function resetAllFilters() {
    state.activeCategory = 'all';
    state.searchQuery = '';
    if (DOM.gallerySearchInput) DOM.gallerySearchInput.value = '';
    if (DOM.clearSearchBtn) DOM.clearSearchBtn.style.display = 'none';

    DOM.filterButtons.forEach(btn => {
      const isAll = btn.getAttribute('data-category') === 'all';
      btn.classList.toggle('active', isAll);
      btn.setAttribute('aria-selected', isAll ? 'true' : 'false');
    });

    renderGallery();
    showToast('Reset all gallery filters', '↺');
  }

  function smoothScrollTo(selector) {
    const target = document.querySelector(selector);
    if (!target) return;

    const headerHeight = DOM.header ? DOM.header.offsetHeight : 70;
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
