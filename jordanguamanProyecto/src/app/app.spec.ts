import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  // Prueba 1: should create the app component
  it('should create the app component', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // Prueba 2: should render the angular logo SVG
  it('should render the angular logo SVG', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const logo = compiled.querySelector('svg.angular-logo');
    expect(logo).toBeTruthy();
  });

  // Prueba 3: should render title in h1 tag
  it('should render title in h1 tag', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, jordanguamanProyecto');
  });

  // Prueba 4: should have main container with correct class
  it('should have main container with correct class', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const mainElement = compiled.querySelector('main');
    expect(mainElement).toBeTruthy();
    expect(mainElement?.classList.contains('main')).toBeTruthy();
  });

  // Prueba 5: should have divider element with correct role
  it('should have divider element with correct role', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const divider = compiled.querySelector('.divider');
    expect(divider).toBeTruthy();
    expect(divider?.getAttribute('role')).toBe('separator');
    expect(divider?.getAttribute('aria-label')).toBe('Divider');
  });
});
