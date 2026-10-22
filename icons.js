/* أيقونات SVG مدمجة (بدل مكتبة خارجية تقيلة) */
(function(){
var P={
'arrow':'<path d="M9 6l6 6-6 6"/>',
'down':'<path d="M6 9l6 6 6-6"/>',
'play':'<path d="M8 5.5v13l11-6.5z"/>',
'file':'<path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4M10 12h5M10 16h5"/>',
'pen':'<path d="M4 20l1-4L16.5 4.5a2.1 2.1 0 013 3L8 19z"/><path d="M14 7l3 3"/>',
'lock':'<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/>',
'check':'<path d="M5 12.5l4.5 4.5L19 7.5"/>',
'bell':'<path d="M6 17V11a6 6 0 0112 0v6l1.5 2h-15z"/><path d="M10 21h4"/>',
'user':'<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4.5 4-6 8-6s7 1.5 8 6"/>',
'out':'<path d="M10 4H5v16h5M15 8l4 4-4 4M19 12H9"/>',
'book':'<path d="M4 5.5C6.5 4.5 9.5 4.5 12 6c2.5-1.5 5.5-1.5 8-.5V19c-2.5-1-5.5-1-8 .5-2.5-1.5-5.5-1.5-8-.5z"/><path d="M12 6v13.5"/>',
'cart':'<path d="M3 4h2.5l2 11h10l2-8H7"/><circle cx="9.5" cy="19.5" r="1.3"/><circle cx="17" cy="19.5" r="1.3"/>',
'menu':'<path d="M4 7h16M4 12h16M4 17h16"/>',
'x':'<path d="M6 6l12 12M18 6L6 18"/>',
'phone':'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/>',
'clock':'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
'ticket':'<path d="M3 8a2 2 0 002-2h14a2 2 0 002 2v2a2 2 0 000 4v2a2 2 0 00-2 2H5a2 2 0 00-2-2v-2a2 2 0 000-4z"/><path d="M14 6v12" stroke-dasharray="2 2"/>',
'home':'<path d="M4 11l8-7 8 7v9h-5v-6H9v6H4z"/>',
'plus':'<path d="M12 5v14M5 12h14"/>',
'minus':'<path d="M5 12h14"/>',
'shield':'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>'
};
var s='<svg class="sprite" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">';
for(var k in P) s+='<symbol id="i-'+k+'" viewBox="0 0 24 24">'+P[k]+'</symbol>';
s+='</svg>';
window.icon=function(n,cls){return '<svg class="i '+(cls||'')+'" aria-hidden="true"><use href="#i-'+n+'"/></svg>';};
function inject(){
  document.body.insertAdjacentHTML('afterbegin',s);
  document.querySelectorAll('[data-i]').forEach(function(e){e.insertAdjacentHTML('afterbegin',icon(e.getAttribute('data-i')));});
}
if(document.body)inject();else document.addEventListener('DOMContentLoaded',inject);
})();
