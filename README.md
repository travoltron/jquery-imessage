# jquery-imessage
Simple plugin that takes copy and displays fake text message

To use, make sure jQuery is loaded, include the `jquery-imessage.js` after. 

In your HTML include: 
`<div id="iMessage"></div>`

And the js file should look like:

```
$(function() {
    $('#iMessage').iMessage({
        'sender': 'CHANGE ME'
    }, [{
        'direction': 'from',
        'message': 'this is a message'
    }, {
        'direction': 'from',
        'message': 'this is a message'
    }, {
        'direction': 'to',
        'message': 'this is a message'
    }, {
        'direction': 'to',
        'message': 'this is a message'
    }, {
        'direction': 'from',
        'message': 'this is a message'
    }, ]);
});
```