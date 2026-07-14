# Requirements Document

## Introduction

The Projects Page is a portfolio showcase feature for the EntroLabs website that enables users to discover and explore 24+ case studies across five sectors: Government, Healthcare, Smart City, Education, and Enterprise. The system provides dynamic category filtering, real-time search functionality, responsive layouts, and engaging animations to deliver an optimal browsing experience. The feature addresses the business need to effectively communicate EntroLabs' expertise and project portfolio to potential clients, partners, and stakeholders.

## Glossary

- **Projects_System**: The complete Projects Page feature including UI, filtering, and data management
- **Filter_System**: The combination of category filters and search functionality
- **Project_Card**: Individual display component for a single project
- **Category**: One of five project classifications (Government, Healthcare, Smart City, Education, Enterprise)
- **Search_Query**: User-entered text string for searching projects
- **Filtered_Results**: Subset of projects matching active filters and search criteria
- **Category_Statistics**: Count of projects in each category
- **Animation_System**: Framer Motion-based animations for reveals and transitions
- **Glass_Morphism**: Design style using backdrop blur, transparency, and subtle borders
- **Project_Data**: Array of 24 project objects with metadata (title, description, category, image, tags)

## Requirements

### Requirement 1: Project Display

**User Story:** As a website visitor, I want to view all EntroLabs projects in an organized grid layout, so that I can browse the portfolio easily.

#### Acceptance Criteria

1. WHEN a user navigates to /projects, THE Projects_System SHALL display all 24 projects in a responsive grid layout
2. THE Projects_System SHALL display project cards in a 1-column grid on mobile devices (width < 768px)
3. THE Projects_System SHALL display project cards in a 2-column grid on tablet devices (768px ≤ width < 1024px)
4. THE Projects_System SHALL display project cards in a 3-column grid on desktop devices (width ≥ 1024px)
5. WHEN the page loads, THE Animation_System SHALL reveal project cards with staggered delays (0s, 0.1s, 0.2s per row)

### Requirement 2: Project Card Content

**User Story:** As a website visitor, I want to see essential project information on each card, so that I can quickly assess project relevance.

#### Acceptance Criteria

1. THE Project_Card SHALL display the project image with 16:9 aspect ratio
2. THE Project_Card SHALL display a category badge overlay on the project image
3. THE Project_Card SHALL display the project title in bold text
4. THE Project_Card SHALL display the project description (2-3 lines)
5. THE Project_Card SHALL display up to 3 project tags as small badges
6. WHEN a project image fails to load, THE Project_Card SHALL display a fallback gradient background with category-specific emoji icon

### Requirement 3: Category Filtering

**User Story:** As a website visitor, I want to filter projects by category, so that I can focus on projects relevant to my sector of interest.

#### Acceptance Criteria

1. THE Filter_System SHALL provide filter buttons for 'All', 'Government', 'Healthcare', 'Smart City', 'Education', and 'Enterprise'
2. WHEN a user selects a category filter, THE Projects_System SHALL display only projects matching that category
3. WHEN a user selects 'All' category, THE Projects_System SHALL display all 24 projects
4. THE Filter_System SHALL display the count of projects for each category in parentheses next to the category name
5. WHEN a category filter is active, THE Filter_System SHALL highlight the active filter button with primary color and white text
6. WHEN a category filter changes, THE Animation_System SHALL apply exit animation to current results and enter animation to new results

### Requirement 4: Search Functionality

**User Story:** As a website visitor, I want to search for projects by keywords, so that I can quickly find projects matching specific topics or technologies.

#### Acceptance Criteria

1. THE Filter_System SHALL provide a search input field with magnifying glass icon
2. WHEN a user enters text in the search input, THE Projects_System SHALL filter projects in real-time
3. THE Projects_System SHALL match search queries against project title, description, and tags (case-insensitive)
4. WHEN a search query is active, THE Filter_System SHALL display a clear button (X icon) to reset the search
5. WHEN the search input is cleared, THE Projects_System SHALL restore all projects matching the active category filter

### Requirement 5: Combined Filtering

**User Story:** As a website visitor, I want to use category filters and search together, so that I can narrow down projects with precision.

#### Acceptance Criteria

1. WHEN both category filter and search query are active, THE Projects_System SHALL apply both conditions using AND logic
2. THE Filtered_Results SHALL contain only projects that match the selected category AND contain the search query
3. WHEN filters result in zero matches, THE Projects_System SHALL display an empty state message
4. THE Filter_System SHALL provide a "Clear all filters" button when any filters are active
5. WHEN "Clear all filters" is clicked, THE Projects_System SHALL reset category to 'All' and clear the search query

### Requirement 6: Empty State Handling

**User Story:** As a website visitor, I want clear feedback when no projects match my filters, so that I understand why I see no results.

#### Acceptance Criteria

1. WHEN filtered results are empty, THE Projects_System SHALL display a search emoji icon (🔍) with "No projects found" heading
2. THE Projects_System SHALL display a helpful message: "Try adjusting your filters or search terms"
3. THE Projects_System SHALL display a "Clear Filters" button in the empty state
4. WHEN "Clear Filters" is clicked from empty state, THE Projects_System SHALL reset all filters and display all projects

### Requirement 7: Hero Section

**User Story:** As a website visitor, I want to see an overview of EntroLabs' portfolio statistics, so that I can understand the company's experience at a glance.

#### Acceptance Criteria

1. THE Projects_System SHALL display a hero section with "Our Portfolio" badge, title, and description
2. THE Projects_System SHALL display three statistics: "24+ Projects", "60+ Clients", and "7+ Years Experience"
3. THE Projects_System SHALL display the statistics as circular badges with alternating primary and secondary colors
4. WHEN the page loads, THE Animation_System SHALL reveal hero elements with staggered delays (0.1s, 0.2s, 0.3s, 0.4s)

### Requirement 8: Sticky Filter Bar

**User Story:** As a website visitor, I want the filter controls to remain accessible while scrolling, so that I can adjust filters without scrolling back to the top.

#### Acceptance Criteria

1. THE Filter_System SHALL position the filter bar with sticky positioning at top-20 (80px from top)
2. WHILE scrolling the page, THE Filter_System SHALL keep the filter bar visible below the header
3. THE Filter_System SHALL apply glass morphism styling with backdrop blur and semi-transparent background
4. THE Filter_System SHALL apply border styling: top and bottom borders with subtle opacity

### Requirement 9: Responsive Design

**User Story:** As a website visitor using various devices, I want the Projects Page to adapt to my screen size, so that I have an optimal viewing experience.

#### Acceptance Criteria

1. THE Projects_System SHALL use a single-column layout for mobile devices (width < 768px)
2. THE Projects_System SHALL use a two-column layout for tablet devices (768px ≤ width < 1024px)
3. THE Projects_System SHALL use a three-column layout for desktop devices (width ≥ 1024px)
4. THE Projects_System SHALL adjust spacing and font sizes for each breakpoint
5. THE Filter_System SHALL stack filter buttons vertically on mobile and horizontally on desktop

### Requirement 10: Dark Mode Support

**User Story:** As a website visitor with dark mode preferences, I want the Projects Page to respect my color scheme preference, so that I have a comfortable viewing experience.

#### Acceptance Criteria

1. THE Projects_System SHALL detect the user's color scheme preference (light or dark)
2. WHEN dark mode is active, THE Projects_System SHALL use dark background colors and light text
3. WHEN dark mode is active, THE Project_Card SHALL use dark glass morphism styling with appropriate transparency
4. WHEN dark mode is active, THE Filter_System SHALL use dark backgrounds for inactive filters and maintain readable contrast
5. THE Projects_System SHALL apply smooth transitions when switching between light and dark modes

### Requirement 11: Card Hover Effects

**User Story:** As a website visitor, I want visual feedback when hovering over project cards, so that I understand which card I'm interacting with.

#### Acceptance Criteria

1. WHEN a user hovers over a Project_Card, THE Animation_System SHALL translate the card upward by 6 pixels
2. WHEN a user hovers over a Project_Card, THE Projects_System SHALL apply an elevated shadow effect
3. WHEN a user hovers over a Project_Card title, THE Projects_System SHALL change the title color to primary green
4. THE Animation_System SHALL apply hover transitions with 0.3s duration and premium easing function
5. WHEN the user's cursor leaves the card, THE Animation_System SHALL return the card to its original state

### Requirement 12: Scroll Reveal Animations

**User Story:** As a website visitor, I want engaging animations as I scroll, so that I have a premium browsing experience.

#### Acceptance Criteria

1. WHEN a project card enters the viewport, THE Animation_System SHALL reveal it with fade-in and upward motion
2. THE Animation_System SHALL trigger reveal animations when 10% of an element is visible
3. THE Animation_System SHALL trigger each reveal animation only once per page load
4. THE Animation_System SHALL apply staggered delays for cards in the same row (0s, 0.1s, 0.2s)
5. THE Animation_System SHALL use premium easing curves for smooth, natural motion

### Requirement 13: Call-to-Action Section

**User Story:** As a potential client, I want clear next steps after viewing the portfolio, so that I can engage with EntroLabs easily.

#### Acceptance Criteria

1. THE Projects_System SHALL display a CTA section at the bottom of the page with heading "Ready to Start Your Project?"
2. THE Projects_System SHALL display descriptive text about joining 60+ clients
3. THE Projects_System SHALL provide two buttons: "Get in Touch" (primary) and "Explore Services" (outline)
4. WHEN "Get in Touch" is clicked, THE Projects_System SHALL navigate to the contact page
5. WHEN "Explore Services" is clicked, THE Projects_System SHALL navigate to the services page

### Requirement 14: Performance Optimization

**User Story:** As a website visitor, I want the Projects Page to load quickly and scroll smoothly, so that I have a responsive browsing experience.

#### Acceptance Criteria

1. THE Projects_System SHALL use useMemo to compute filtered results only when dependencies change
2. THE Projects_System SHALL use lazy loading for project images (loading="lazy" attribute)
3. THE Projects_System SHALL achieve First Contentful Paint (FCP) in less than 1.5 seconds
4. THE Projects_System SHALL achieve Largest Contentful Paint (LCP) in less than 2.5 seconds
5. THE Animation_System SHALL maintain 60 frames per second during animations and scrolling

### Requirement 15: Category Statistics Accuracy

**User Story:** As a website visitor, I want accurate project counts displayed for each category, so that I can trust the information presented.

#### Acceptance Criteria

1. THE Filter_System SHALL compute category statistics by counting projects in each category
2. THE Filter_System SHALL display the 'All' count equal to the total number of projects
3. THE Filter_System SHALL ensure the sum of individual category counts equals the total project count
4. WHEN project data is updated, THE Filter_System SHALL recalculate category statistics automatically
5. THE Filter_System SHALL display category counts in parentheses next to category names (e.g., "Government (15)")

### Requirement 16: Data Integrity

**User Story:** As a developer, I want the Projects System to handle data correctly, so that filtering operations are reliable and predictable.

#### Acceptance Criteria

1. THE Projects_System SHALL never mutate the original PROJECTS array during filtering operations
2. THE Filtered_Results SHALL always be a subset or equal to the original PROJECTS array
3. THE Projects_System SHALL preserve the original sort order of projects in filtered results
4. THE Projects_System SHALL handle empty PROJECTS array gracefully without runtime errors
5. WHEN filter operations are applied, THE Projects_System SHALL return an empty array if no matches are found (not null or undefined)

### Requirement 17: Search Query Normalization

**User Story:** As a website visitor, I want search to work regardless of my text casing, so that I can find projects without worrying about capitalization.

#### Acceptance Criteria

1. THE Filter_System SHALL convert all search queries to lowercase for comparison
2. THE Filter_System SHALL convert project titles, descriptions, and tags to lowercase for comparison
3. WHEN a search query is empty string, THE Filter_System SHALL return all projects matching the active category
4. THE Filter_System SHALL trim whitespace from search queries before applying search logic
5. THE Projects_System SHALL update filtered results in real-time as the user types (no submit button required)

### Requirement 18: Image Fallback Handling

**User Story:** As a website visitor, I want to see placeholder content when project images fail to load, so that I can still identify and read about projects.

#### Acceptance Criteria

1. WHEN a project image fails to load, THE Project_Card SHALL hide the broken image element
2. THE Project_Card SHALL display a gradient background matching the project category color
3. THE Project_Card SHALL display a category-specific emoji icon (🏛️ Government, 🏥 Healthcare, 🏙️ Smart City, 🎓 Education, 💼 Enterprise)
4. THE Project_Card SHALL maintain the same aspect ratio and layout with fallback content
5. THE Project_Card SHALL trigger the fallback on image error event (onError handler)

### Requirement 19: Filter State Consistency

**User Story:** As a website visitor, I want filter states to be consistent and predictable, so that I understand what results I'm seeing.

#### Acceptance Criteria

1. THE Filter_System SHALL initialize with selectedCategory set to 'All' and searchQuery set to empty string
2. WHEN only category filter is active, THE Projects_System SHALL display the category name in the active filters summary
3. WHEN only search query is active, THE Projects_System SHALL display "Search: [query]" in the active filters summary
4. WHEN both filters are active, THE Projects_System SHALL display both in the active filters summary with removable badges
5. THE Filter_System SHALL provide individual remove buttons (×) for each active filter in the summary

### Requirement 20: Animation Performance

**User Story:** As a website visitor on any device, I want smooth animations, so that the browsing experience feels premium and responsive.

#### Acceptance Criteria

1. THE Animation_System SHALL use CSS transforms for all motion animations (translate, scale)
2. THE Animation_System SHALL use GPU-accelerated properties (transform, opacity) instead of layout properties (top, left, width, height)
3. THE Animation_System SHALL use IntersectionObserver API for scroll-triggered animations instead of scroll event listeners
4. THE Animation_System SHALL apply "triggerOnce: true" to prevent repeated animations on scroll
5. THE Animation_System SHALL use requestAnimationFrame for JavaScript-driven animations

### Requirement 21: Glass Morphism Styling

**User Story:** As a website visitor, I want a modern, cohesive visual design, so that the portfolio appears professional and premium.

#### Acceptance Criteria

1. THE Project_Card SHALL use backdrop-blur-xl (12px blur) for glass morphism effect
2. THE Project_Card SHALL use semi-transparent white background (rgba(255, 255, 255, 0.4)) in light mode
3. THE Project_Card SHALL use semi-transparent slate background (rgba(30, 41, 59, 0.4)) in dark mode
4. THE Project_Card SHALL use subtle borders with low opacity (rgba(255, 255, 255, 0.2) light, rgba(255, 255, 255, 0.03) dark)
5. WHEN hovering, THE Project_Card SHALL change border color to green with subtle opacity (rgba(35, 141, 69, 0.3))

### Requirement 22: Accessibility - Keyboard Navigation

**User Story:** As a keyboard user, I want to navigate and use all filter controls with my keyboard, so that I can browse projects without a mouse.

#### Acceptance Criteria

1. THE Filter_System SHALL allow Tab key navigation to all interactive elements (search input, filter buttons, clear buttons)
2. WHEN a filter button receives focus, THE Filter_System SHALL apply visible focus styling (ring-2 ring-primary)
3. THE Filter_System SHALL allow Enter or Space key to activate filter buttons
4. THE Filter_System SHALL allow Escape key to clear the search input when focused
5. THE Projects_System SHALL maintain logical tab order: search input → filter buttons → project cards → CTA buttons

### Requirement 23: Loading State Handling

**User Story:** As a website visitor, I want immediate visual feedback when filters change, so that I know the system is responding to my actions.

#### Acceptance Criteria

1. WHEN a filter changes, THE Animation_System SHALL immediately begin the exit animation for current results
2. THE Animation_System SHALL use AnimatePresence with mode="wait" to prevent layout shift during transitions
3. THE Animation_System SHALL complete exit animation before starting enter animation (400ms duration)
4. THE Projects_System SHALL display filtered results within 100ms of filter change (excluding animation time)
5. THE Projects_System SHALL show accurate result count immediately when filters change

### Requirement 24: Tag Display Logic

**User Story:** As a website visitor, I want to see relevant tags for each project, so that I can quickly identify technologies and domains without overwhelming detail.

#### Acceptance Criteria

1. THE Project_Card SHALL display a maximum of 3 tags per project
2. WHEN a project has more than 3 tags, THE Project_Card SHALL display the first 3 tags only
3. THE Project_Card SHALL render tags as small badges with muted variant styling
4. THE Project_Card SHALL display tags in a horizontal flex layout with gap spacing
5. THE Project_Card SHALL wrap tags to a new line if they exceed card width

### Requirement 25: Route Integration

**User Story:** As a website visitor, I want to access the Projects Page via a clean URL, so that I can bookmark and share the page easily.

#### Acceptance Criteria

1. THE Projects_System SHALL be accessible at the route path "/projects"
2. WHEN a user navigates to /projects, THE Projects_System SHALL render within the PageWrapper component
3. THE PageWrapper SHALL apply page transition animations (fade-in) when entering the Projects Page
4. THE Projects_System SHALL be included in the main navigation menu with active state styling when on /projects
5. WHEN a user clicks browser back button from /projects, THE Projects_System SHALL cleanly unmount and apply exit transition
