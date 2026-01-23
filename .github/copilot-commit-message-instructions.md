# Commit Message Instructions

## Format
Follow this pattern for all commit messages:

```
<type>(<scope>): <subject>

<body>

<footer>
```

## Type
Use one of:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style (formatting, missing semicolons, etc.)
- `refactor`: Code refactoring without feature changes
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Build, dependencies, or tooling changes

## Scope
Optional. Specify the affected component (e.g., `game`, `ui`, `validation`).

## Subject
- Imperative mood ("add" not "added")
- Don't capitalize first letter
- No period at the end
- Maximum 50 characters

## Body
Optional. Explain what and why, not how. Wrap at 72 characters.

## Footer
Reference issues: `Closes #123` or `Fixes #456`

## Examples
```
feat(game): add rock-paper-scissors logic

Implement game rules and win/loss determination.

Closes #12
```

```
fix(ui): correct button alignment on mobile
```