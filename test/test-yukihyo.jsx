import "test-case.jsx";
import "yukihyo.jsx";

class _Test extends TestCase
{
    function test_greeting() : void
    {
        var obj = new yukihyo();
        obj.setMessage("Hello World");
        this.expect(obj.greeting()).toBe("Hello World");
    }
}
