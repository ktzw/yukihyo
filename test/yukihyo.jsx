import "test-case.jsx";
import "yukihyo.jsx";

class _Test extends TestCase
{
    function test_greeting() : void
    {
        var obj = new Yukihyo();
        this.expect(obj).notToBe(null);
    }
}
