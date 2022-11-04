## React-Texas

React Texas(Text Ellipsis) component for trucating long text with ellipsis(three dots)

## Install

```javascript
npm i react-texas
```

For Typescript users, this package comes with type declaration files, you should be able to get autocompletion in editors such as VS code.

## Examples

### single-line ellipsis

```tsx
import Ellipsis from 'react-texas'
<Ellipsis style={{ width: 200, fontSize: 16, border: "1px solid orange", padding: 4 }}>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</Ellipsis>
```

### multiple-line ellipsis

```tsx
import Ellipsis from 'react-texas'
<Ellipsis maxLines={3} style={{ width: 200, fontSize: 16, border: "1px solid orange", padding: 4 }}>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</Ellipsis>
```

### place ellipsis on the left

by default, ellipsis will be placed on the right. But sometimes, you may want the ellipsis to be placed on the left. 

one example would be a super long URL with many subdomains, in this case, TLD matters more:

```tsx
import Ellipsis from 'react-texas'
<Ellipsis placement="left" style={{ width: 200, fontSize: 16, border: "1px solid orange", padding: 4 }}>
  github-production-user-asset-6210df.optimizationguide-pa.details.info.user.s3.amazonaws.com
</Ellipsis>
```

### specify the underlying HTML element

by default, this component is represented as a `div` tag. You can specify it to be any valid HTML tag.

```tsx
import Ellipsis from 'react-texas'
<Ellipsis as="span" style={{ width: 200, fontSize: 16, border: "1px solid orange", padding: 4 }}>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</Ellipsis>
```
