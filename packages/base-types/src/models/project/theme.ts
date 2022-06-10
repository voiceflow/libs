type Shades = {
  [key in '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900']: string;
};

export interface Theme {
  palette: Shades;
  standardColor: string;
  name?: string;
}

export type Themes = Array<Theme>;
