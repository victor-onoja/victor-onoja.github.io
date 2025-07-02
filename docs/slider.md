# Slider component

```html
 <div class="slider w-full h-[100px] overflow-hidden slider-mask" style="--quantity: 10; --height: 100px; mask-image: linear-gradient(
    to right,
    transparent,
    #000 10% 90%,
    transparent
    );">
<div class="list flex w-full relative"
style="min-width: calc(var(--quantity) * var(--width));">
    <div class="item absolute left-full" style="--position: 1; --width: 100px;"><img class="h-full" src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&amp;fit=crop&amp;w=600&amp;q=80" alt=""></div>
    <div class="item absolute left-full" style="--position: 2; --width: 100px;"><img class="h-full" src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&amp;fit=crop&amp;w=600&amp;q=80" alt=""></div>
    <div class="item absolute left-full" style="--position: 3; --width: 100px;"><img class="h-full" src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&amp;fit=crop&amp;w=600&amp;q=80" alt=""></div>
    <div class="item absolute left-full" style="--position: 4; --width: 100px;"><img class="h-full" src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&amp;fit=crop&amp;w=600&amp;q=80" alt=""></div>
    <div class="item absolute left-full" style="--position: 5; --width: 100px;"><img class="h-full" src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&amp;fit=crop&amp;w=600&amp;q=80" alt=""></div>
    <div class="item absolute left-full" style="--position: 6; --width: 100px;"><img class="h-full" src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&amp;fit=crop&amp;w=600&amp;q=80" alt=""></div>
    <div class="item absolute left-full" style="--position: 7; --width: 100px;"><img class="h-full" src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&amp;fit=crop&amp;w=600&amp;q=80" alt=""></div>
    <div class="item absolute left-full" style="--position: 8; --width: 100px;"><img class="h-full" src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&amp;fit=crop&amp;w=600&amp;q=80" alt=""></div>
    <div class="item absolute left-full" style="--position: 9; --width: 100px;"><img class="h-full" src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&amp;fit=crop&amp;w=600&amp;q=80" alt=""></div>
    <div class="item absolute left-full" style="--position: 10; --width: 100px;"><img class="h-full" src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&amp;fit=crop&amp;w=600&amp;q=80" alt=""></div>
</div>
</div>
```

```css
.slider .list .item {
    width: var(--width);
    height: var(--height);
    animation: autorun 10s linear infinite;
    animation-delay: calc((10s / var(--quantity)) * (var(--position) - 1) - 9s);
}

.slider:hover .item{
    animation-play-state: paused!important;
}

@keyframes autorun {
    from {
    left: 100%;
    }
    to {
    left: calc(var(--width) * -1);
    }
}
```