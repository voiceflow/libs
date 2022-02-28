# ts-ast-modifier

Helper for modifying typescript files via their AST

## Usage

```
import {Loaders, Modifiers} from '@voiceflow/ts-ast-modifier';

const project = Loaders.loadProjectDirectory(
  { tsConfigFilePath: 'path/to/tsconfig.json' },
  'path/to/files/*.d.ts',
  Modifiers.exportStarToImportStarExport);

await project.save();
```

### Modifiers

Modifiers are used to change the source file in some way.

`exportStarToImportStarExport` turns named exports into a named import + export object.

```
export * as x from './path`;
```

Becomes:

```
import * as x from './path`;
export { x };
```
