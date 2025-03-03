# Changelog

## Version 2 (2025-03-01)

### Key Changes

1. **Enhanced Control for Claude 3.7 Sonnet**
   - Prevented Claude 3.7 Sonnet from performing operations not explicitly instructed
   - Optimized to execute only actions that follow explicit instructions

2. **File Operation Efficiency**
   - Reduced unnecessary segmentation of file read/write operations
   - Improved ability to comprehend larger contexts in a single operation

3. **Optimization for Claude 3.7 Sonnet**
   - Adjusted instruction formats to leverage Claude 3.7 Sonnet's capabilities
   - Enhanced efficiency in dialogue and processing

### Detailed Changes

- Improved file reading to process larger sections at once
- Reduced chains of unnecessary tool calls for more efficient processing flows
- Optimized instruction formats to maximize Claude 3.7 Sonnet's understanding and reasoning abilities
- Strengthened controls to prevent additional processing without explicit instructions

## Version 1 (Initial Release)

- Initial version of custom instructions (`.windsurfrules`) for Windsurf
- Optimized adaptation of [cursorrules](https://github.com/kinopeee/cursorrules) for Windsurf Cascade
- Included descriptions of basic tech stacks, API version management, and project structures
- Provided two configuration types: v1 (simplified version) and v5 (customizable version) 