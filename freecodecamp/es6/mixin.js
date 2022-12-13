const flyMixin = obj => {
    obj.fly = () => {}
}

const bird = {}
const plane = {}

flyMixin(bird);
flyMixin(plane);

bird.fly();
plane.fly();