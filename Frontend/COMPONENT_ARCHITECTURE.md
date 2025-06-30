# Component Architecture Documentation

## 🏗️ Overview

The codebase has been reorganized from page-based monolithic components to a modular, reusable component architecture. This improves maintainability, reusability, and follows React best practices.

## 📁 Directory Structure

```
src/
├── components/
│   ├── index.ts                  # Central exports
│   ├── ui/                       # Reusable UI components
│   │   ├── HeroSection.tsx
│   │   ├── FeatureCard.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── CTASection.tsx
│   │   └── Background.tsx
│   ├── sections/                 # Page-specific sections
│   │   ├── HomeHeroSection.tsx
│   │   ├── HomeFeaturesSection.tsx
│   │   ├── HomeStatsSection.tsx
│   │   ├── AboutMissionSection.tsx
│   │   ├── AboutPrinciplesSection.tsx
│   │   └── AboutTechnologySection.tsx
│   ├── NounsNavbar.tsx          # Navigation
│   └── Footer.tsx               # Footer
└── pages/
    ├── Home.tsx                 # Composed of sections
    ├── About.tsx                # Composed of sections
    └── ...
```

## 🧱 Component Types

### 1. **UI Components** (`/components/ui/`)
Generic, reusable components that can be used across different pages.

#### `HeroSection.tsx`
```tsx
interface HeroSectionProps {
  badge?: {
    icon: ReactNode;
    text: string;
  };
  title: string | ReactNode;
  subtitle: string;
  className?: string;
  children?: ReactNode;
}
```

#### `FeatureCard.tsx`
```tsx
interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  color?: string;
  index?: number;
}
```

#### `SectionHeader.tsx`
```tsx
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}
```

#### `CTASection.tsx`
```tsx
interface CTASectionProps {
  title: string;
  subtitle: string;
  primaryButton?: {
    text: string;
    onClick?: () => void;
  };
  secondaryButton?: {
    text: string;
    onClick?: () => void;
  };
  className?: string;
}
```

#### `Background.tsx`
```tsx
interface BackgroundProps {
  variant?: 'grid' | 'shapes' | 'both';
  opacity?: number;
  className?: string;
}
```

### 2. **Section Components** (`/components/sections/`)
Page-specific sections that combine UI components with content.

#### Home Page Sections:
- `HomeHeroSection.tsx` - Hero with badge, title, CTA buttons, and stats
- `HomeFeaturesSection.tsx` - Feature grid showcasing DAO capabilities  
- `HomeStatsSection.tsx` - Statistics cards component

#### About Page Sections:
- `AboutMissionSection.tsx` - Mission statement and value props
- `AboutPrinciplesSection.tsx` - Core principles grid
- `AboutTechnologySection.tsx` - Technology systems showcase

### 3. **Page Components** (`/pages/`)
Now clean and focused, importing and composing sections.

#### Before (Monolithic):
```tsx
const About = () => {
  const principles = [...]; // Data
  const team = [...];       // Data
  
  return (
    <div>
      {/* 200+ lines of JSX */}
      <section>...</section>
      <section>...</section>
      <section>...</section>
    </div>
  );
};
```

#### After (Composed):
```tsx
const About = () => {
  return (
    <div className="min-h-screen bg-dark-bg pt-20">
      <Background variant="grid" opacity={0.2} />
      <HeroSection badge={...} title={...} subtitle={...} />
      <AboutMissionSection />
      <AboutPrinciplesSection />
      <AboutTechnologySection />
      <CTASection title={...} subtitle={...} />
    </div>
  );
};
```

## 🔄 Benefits of This Architecture

### 1. **Reusability**
- `HeroSection` can be used on any page with different props
- `FeatureCard` standardizes all feature displays
- `CTASection` provides consistent call-to-action styling

### 2. **Maintainability** 
- Changes to hero sections happen in one place
- Bug fixes affect all pages using the component
- Easier to locate and update specific functionality

### 3. **Consistency**
- All hero sections use the same animations and styling
- Feature cards have uniform hover effects and layout
- CTA sections maintain consistent button styling

### 4. **Testing**
- Components can be tested in isolation
- Easier to mock dependencies
- More focused unit tests

### 5. **Development Speed**
- New pages can be built by composing existing components
- Less code duplication
- Faster feature development

## 🎯 Usage Examples

### Creating a New Page
```tsx
import {
  Background,
  HeroSection,
  SectionHeader,
  FeatureCard,
  CTASection
} from '../components';

const NewPage = () => {
  return (
    <div className="min-h-screen bg-dark-bg pt-20">
      <Background variant="both" />
      
      <HeroSection
        badge={{ icon: <Icon />, text: "New Feature" }}
        title="Page Title"
        subtitle="Page description"
      />
      
      <section className="py-24 relative z-10">
        <div className="container-base">
          <SectionHeader 
            title="Section Title"
            subtitle="Section description"
          />
          {/* Custom content */}
        </div>
      </section>
      
      <CTASection
        title="Call to Action"
        subtitle="Action description"
        primaryButton={{ text: "Primary Action" }}
      />
    </div>
  );
};
```

### Customizing Components
```tsx
// Custom hero with additional content
<HeroSection
  title="Custom Title"
  subtitle="Custom subtitle"
>
  <CustomButtonGroup />
  <CustomStatsGrid />
</HeroSection>

// Feature card with custom color
<FeatureCard
  icon={<CustomIcon />}
  title="Custom Feature"
  description="Custom description"
  color="cyber-green"
/>
```

## 🚀 Future Enhancements

### 1. **Additional UI Components**
- `Card` - Generic card wrapper
- `Button` - Standardized button component
- `Modal` - Reusable modal dialogs
- `Form` - Form components with validation

### 2. **Advanced Sections**
- `TestimonialsSection` - Customer testimonials
- `FAQSection` - Frequently asked questions
- `TeamSection` - Team member showcase
- `BlogSection` - Blog post previews

### 3. **Layout Components**
- `PageWrapper` - Standard page layout
- `Section` - Standardized section wrapper
- `Container` - Responsive container component

## 📋 Migration Guidelines

When refactoring existing pages:

1. **Identify Reusable Patterns** - Look for repeated JSX structures
2. **Extract Data** - Move data arrays to separate files or components
3. **Create Section Components** - Group related content into sections
4. **Use UI Components** - Replace custom JSX with standard components
5. **Test Thoroughly** - Ensure visual and functional parity

This architecture sets up the codebase for scalable development while maintaining the beautiful Nouns-inspired cyberpunk aesthetic!
