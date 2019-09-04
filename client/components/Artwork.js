import React from 'react'

export const Artwork = () => {
  return (
    <div style={{paddingBottom: '5rem'}}>
      <div className="header">
        <h1>Creative Work</h1>
      </div>
      <div className="goal">
        <div style={{width: '50rem'}}>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <div className="artContainer">
              <div className="artDescription">
                <h3>Web Design</h3>
                <div>
                  <h4>Description</h4>
                </div>
              </div>
              <div className="artExamples">
                <div>
                  <img
                    src="sidebar.png"
                    style={{paddingLeft: '1rem', width: '100%'}}
                  />
                </div>
              </div>
            </div>
            <div className="artContainer">
              <div className="artDescription">
                <h3>Digital Collages</h3>
                <div>
                  <h4>Description</h4>
                </div>
              </div>
              <div className="artExamples">
                <div>
                  <img src="longme.jpg" style={{width: '85%'}} />
                </div>
              </div>
            </div>
            <div className="artContainer">
              <div className="artDescription">
                <div>
                  <h3>Poetry</h3>
                </div>
                <div>
                  <h4>Road Not Taken</h4>
                  {/* <h4>Example 2</h4>
                  <h4>Example 3</h4> */}
                </div>
              </div>
              <div className="artExamples">
                <div
                  style={{
                    paddingTop: '1rem',
                    paddingLeft: '5rem',
                    paddingRight: '5rem'
                  }}
                >
                  <h4 style={{textAlign: 'center'}}>
                    <i>
                      Excerpt from a draft of “The Road Not Taken” by Robert
                      Frost, composed in the senior spring of his undergraduate
                      education
                    </i>
                    <br />
                    <br />
                    “Two roads diverged in a wood, <br />
                    and I— I took the one less traveled by, <br />
                    Until a clearing in the dense foliage presented, <br />
                    And with jealous gaze at blissful peers, <br />I lamented: I
                    should have done investment banking”
                  </h4>
                </div>
              </div>
            </div>
            <div className="artContainer">
              <div className="artDescription">
                <div>
                  <h3>Fiction</h3>
                </div>
                <div>
                  <h4>Writing Sample</h4>
                  {/* <h4>Example 2</h4>
                  <h4>Example 3</h4> */}
                </div>
              </div>
              <div className="artExamples">
                <div className="writingSample">
                  <p style={{textAlign: 'left'}}>
                    {'    '}You asked me, “Ai dạy con để cắt trái cam giống
                    vậy?”* I plopped the cutting board of orange slices onto the
                    kitchen table. Sinking into the vinyl chairs, I shrugged, “I
                    don’t know. I just cut oranges like this”. As you curved
                    your lips around the first slice, I knew that I had not told
                    the truth.
                    <br />
                    <br />
                    {'    '}When I was two, we lived in a little apartment in
                    Seattle. I used to host tea parties on the balcony of our
                    apartment. I watched you slice apples, dipping them into
                    salt-water so that they would not brown. I drank tea from
                    white tea cups with the other children who lived in the
                    building.
                    <br />
                    <br />
                    {'    '}After school, I laid stomach-down on a
                    paisley-clothed mattress in the back room of a nail salon in
                    Canoga Park, California, 91306. With my nose deep into Nancy
                    Drew Mystery #23, my fingers searched for part of a
                    nectarine that you had left out for me. Between customers,
                    you scrubbed the acetone from your skin, briskly drying your
                    hands on a towel, reaching for the fridge handle so you
                    could make me a snack. Those four years of swim team, when
                    my stomach was the size of the moon, I opened the fridge at
                    5:30 pm, 6:45 pm, 8:00 pm, 10:00 pm, my eyes feasting on
                    Glad™ containers of peaches, strawberries, watermelon,
                    cantaloupe, honeydew. After my first college interview, you
                    pulled up to the curb. Without asking about my interview,
                    you procured, from the backseat, a dissected and reassembled
                    dragon-fruit which you had grown on a cactus in our
                    backyard. “It’s your favorite! I didn’t want you to have to
                    wait till we got home.” On a snowy morning in Rhode Island,
                    I received a parcel at mail services. You sent me an
                    avocado, wrapped in 7 layers of newspaper. You included
                    instructions on how to remove the pit.
                    <br />
                    <br />
                    {'         '}I have watched your worn fingers wrap around in
                    endless spirals, grapefruit peels curling onto the kitchen
                    floor. I reach for an orange slice and my hands drip with
                    the sweetness of a life you have cultivated for me.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Artwork
