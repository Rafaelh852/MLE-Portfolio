
function TopBar(){

return (<header class="absolute inset-x-0 top-0 z-50">
<nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
  <div class="flex lg:flex-1">
    <a href="/" class="-m-1.5 p-1.5">
      <span class="sr-only">Rafael Hernandez</span>
      <span>Rafael Hernandez
      </span>
    </a>
  </div>
  <div class=" lg:flex lg:gap-x-12">
    <a href="#about" class="text-sm font-semibold leading-6 text-gray-900">About</a>
    <a href="#articles" class="text-sm font-semibold leading-6 text-gray-900">Articles</a>
    <a href="#work" class="text-sm font-semibold leading-6 text-gray-900">Work</a>
    <a href="#footer" class="text-sm font-semibold leading-6 text-gray-900">Contact</a>
  </div>
  
  <div class=" lg:flex lg:flex-1 lg:justify-end">
    <a href="#" class="hidden text-sm font-semibold leading-6 text-gray-900"> <span aria-hidden="true">&rarr;</span></a>
  </div>
</nav>

</header>)
}

export default TopBar