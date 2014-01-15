#gaTrack

jQuery plugin for Google Analytics Event Tracking

Track events using data elements
```html
<a  data-category="Downloads" 
    data-action="Left Click" 
    data-label="Monthly Statement" 
    href="monthly.csv">
    Download Monthly Statement
</a>
```
#Example code
If we have the following HTML
```html
<a class="track" href="http://google.com">Goto Google</a>
<a class="track" id="TopLogin" data-category="Website Logins" href="/login">Login</a>
<a class="track" id="signupBtn" data-label="Sign Up" data-action="click" data-category="Website Singups" href="/signup">Signup</a>
```
We setup or default tracking settings
```javascript
var settings = {
  "category" : "External Links",
  "action" : "Clicked",
};

$('a.track').gaTrack(settings);
```
Now when we click on the links the following data will be tracked

|Link | Category| Action| Label
|-----|---------|-------|-------
|Google | External Links | Clicked |
|Login | Website Logins | Clicked | TopLogin
|Signup | Website Singups | click | Sign Up

#Setting Options
|Name |Description |Default
|---|---|---
|**category**|For event tracking, a category is a name that you supply as a way to group objects that you want to track.| The current  page title.
|**action** | Use the action parameter to name the type of event or interaction you want to track for a particular web object. (e.g. ‘click,’ ‘download,’ ‘play,’ etc) | Click
|**label** | With labels you can provide additional information for events that you want to track. (e.g. video title or the name of a file)|The element's ID attribute value
|**value** | An integer that you can use to provide numerical data about the user event.|
|**noninteraction** | A boolean that when set to `true`, indicates that the event hit will not be used in bounce-rate calculation.|
|**data_category** | The data attribute used to get the value for category e.g. `data-category="Videos"` | category
|**data_action** | The data attribute used to get the value for action e.g. `data-action="Play"` | action
|**data_label** | The data attribute used to get the value for label e.g. `data-label="Rick Astley - Never Gonna Give You Up"`| label
|**data_value** | The data attribute used to get the value for value e.g. `data-value="5"` | value
|**data_noninteraction** | The data attribute used to get the value for noninteraction e.g. `data-noninteraction="false"` | noninteraction

# License
MIT-License:

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.