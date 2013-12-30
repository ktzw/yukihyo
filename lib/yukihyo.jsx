/**
 * 
 *
 * This is an awesome project to make everyone happy!
 *
 * [sample] This comment is document for class. You can use some HTML tags.
 *
 * @author ktzw
 *
 * @see 
 *
 * License: Public-Domain
 */

__export__ class yukihyo
{
    var message : string;

    /**
     * Constructs yukihyo object.
     */
    function constructor()
    {
    }

    /**
     * [sample] Update message.
     *
     * @param message [sample] Message string to store.
     */
    function setMessage(message : string) : void
    {
        this.message = message;
    }

    /**
     * [sample] Returns greeting message.
     *
     * @return [sample] greeting message.
     */
    function greeting() : string
    {
        return this.message;
    }
}
