import "test-case.jsx";
import "yukihyo.jsx";

class _Test extends TestCase
{
    function test1() : void
    {
        var yukihyo = new Yukihyo([25,30], [40,20,-20,-40], 5, [-7, -5, -5, -5]);
        yukihyo.finish(23,3);
        yukihyo.addTips(4);
        this.expect(yukihyo.result()).toBe((-7) + (-20) + 4 * 5 + (-5));
    }

    function test2() : void
    {
        var yukihyo = new Yukihyo([25,30], [40,20,-20,-40], 5, [-7, -5, -5, -5]);
        yukihyo.finish(45, 1);
        yukihyo.addTips(10);
        this.expect(yukihyo.result()).toBe(15 + 40 + 20 + 10 * 5 + (-7));
    }

    function test3() : void
    {
        var yukihyo = new Yukihyo([25,30], [40,20,-20,-40], 5, [-7, -5, -5, -5]);
        yukihyo.finish(0, 4);
        yukihyo.addTips(-2);
        this.expect(yukihyo.result()).toBe((-30) + (-40) + (-2) * 5 + (-5));
    }
}
