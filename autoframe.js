<!--
// Inspired by a similar script in use at www.fox.com

if (window.name != "openafs_main") {
  x=location.pathname.substring(0,11);
  y=location.pathname.substring(0,14);
  if (x != "/frameless" && y != "/sb/frameless") {
    location.href =
      "http://www.openafs.org/frameset.html?site=openafs&content=" + location.pathname;
  }
}

//-->
