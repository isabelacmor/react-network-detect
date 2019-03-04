# React Network Detect

`NetworkDetect` is a React wrapper component that detects network changes (online and offline) and provides default loading UI for offline scenarios.

```
<NetworkDetect>
  <span> This is a child element</span>
</NetworkDetect>
```

```
<NetworkDetect loadingAnimation={<span>offline</span>}>
  <span> This is a child element</span>
</NetworkDetect>
```