import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function RecipeDetails() {
  let id = useLocation().pathname.split("/")[2];

  let [recipedDetails, setRecipeDetails] = useState({});
  let [ingredients, setIngredients] = useState([]);
  let [instructions, setInstructions] = useState([]);

  useEffect(() => {
    axios.get(`https://dummyjson.com/recipes/${id}`).then((response) => {
      setRecipeDetails(response.data);
      setIngredients(response.data["ingredients"]);
      setInstructions(response.data["instructions"]);
    });
  }, []);

  console.log(recipedDetails);  

  return (
    <div>
      <div className="uk-container">
        <div data-uk-grid>
          <div className="uk-width-1-2@s">
            <div>
              <img
                className="uk-border-rounded-large"
                src={recipedDetails.image}
                alt="Image alt"
              />
            </div>
          </div>
          <div className="uk-width-expand@s uk-flex uk-flex-middle">
            <div>
              <h1>{recipedDetails.name}</h1>
              <h3>Ingredients : </h3>
              <ol>
                {ingredients.map((value) => {
                  return (
                    <>
                      <li>{value}</li>
                    </>
                  );
                })}
              </ol>

              <div
                className="uk-margin-medium-top uk-child-width-expand uk-text-center uk-grid-divider"
                data-uk-grid
              >
                <div>
                  <span data-uk-icon="icon: clock; ratio: 1.4" />
                  <h5 className="uk-text-500 uk-margin-small-top uk-margin-remove-bottom">
                    Active Time
                  </h5>
                  <span className="uk-text-small">
                    {recipedDetails.prepTimeMinutes} mins
                  </span>
                </div>
                <div>
                  <span data-uk-icon="icon: future; ratio: 1.4" />
                  <h5 className="uk-text-500 uk-margin-small-top uk-margin-remove-bottom">
                    Total Time
                  </h5>
                  <span className="uk-text-small">
                    {recipedDetails.cookTimeMinutes} mins
                  </span>
                </div>
                <div>
                  <span data-uk-icon="icon: users; ratio: 1.4" />
                  <h5 className="uk-text-500 uk-margin-small-top uk-margin-remove-bottom">
                    Yield
                  </h5>
                  <span className="uk-text-small">
                    Serves {recipedDetails.servings}
                  </span>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
      <div className="uk-section uk-section-default">
        <div className="uk-container uk-container-small">
          <div className="uk-grid-large" data-uk-grid>
            <div className="uk-width-expand@m">
              <div className="uk-article">
                <h3>How to Make It</h3>

                {instructions.map((value, index) => {
                  return (
                    <>
                      <div
                        id="step-1"
                        className="uk-grid-small uk-margin-medium-top"
                        data-uk-grid
                      >
                        <div className="uk-width-auto">
                          <a
                            href="#"
                            className="uk-step-icon"
                            data-uk-icon="icon: check; ratio: 0.8"
                            data-uk-toggle="target: #step-1; cls: uk-step-active"
                          />
                        </div>
                        <div className="uk-width-expand">
                          <h5
                            className="uk-step-title uk-text-500 uk-text-uppercase uk-text-primary"
                            data-uk-leader="fill:—"
                          >
                            {index+1}. Step
                          </h5>
                          <div className="uk-step-content">{value}</div>
                        </div>
                      </div>
                    </>
                  );
                })}
                <hr className="uk-margin-medium-top uk-margin-large-bottom" />
              </div>
            </div>
          </div>
        </div>
        <div className="uk-section uk-section-muted">
          <div className="uk-container">
            <h3>Other Recipes You May Like</h3>
            <div
              className="uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-margin-medium-top"
              data-uk-grid
            >
              <div>
                <div className="uk-card">
                  <div className="uk-card-media-top uk-inline uk-light">
                    <img
                      className="uk-border-rounded-medium"
                      src="https://source.unsplash.com/-YHSwy6uqvk/300x160"
                      alt="Course Title"
                    />
                    <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium" />
                    <div className="uk-position-xsmall uk-position-top-right">
                      <a
                        href="#"
                        className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                        data-uk-icon="heart"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">
                      Chef John's Turkey Sloppy Joes
                    </h3>
                    <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                      <div className="uk-width-auto uk-flex uk-flex-middle">
                        <span
                          className="uk-rating-filled"
                          data-uk-icon="icon: star; ratio: 0.7"
                        />
                        <span className="uk-margin-xsmall-left">5.0</span>
                        <span>(73)</span>
                      </div>
                      <div className="uk-width-expand uk-text-right">
                        by John Keller
                      </div>
                    </div>
                  </div>
                  <a href="recipe.html" className="uk-position-cover" />
                </div>
              </div>
              <div>
                <div className="uk-card">
                  <div className="uk-card-media-top uk-inline uk-light">
                    <img
                      className="uk-border-rounded-medium"
                      src="https://source.unsplash.com/jUPOXXRNdcA/300x160"
                      alt="Course Title"
                    />
                    <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium" />
                    <div className="uk-position-xsmall uk-position-top-right">
                      <a
                        href="#"
                        className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                        data-uk-icon="heart"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">
                      Brown Sugar Meatloaf
                    </h3>
                    <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                      <div className="uk-width-auto uk-flex uk-flex-middle">
                        <span
                          className="uk-rating-filled"
                          data-uk-icon="icon: star; ratio: 0.7"
                        />
                        <span className="uk-margin-xsmall-left">3.0</span>
                        <span>(94)</span>
                      </div>
                      <div className="uk-width-expand uk-text-right">
                        by Danial Caleem
                      </div>
                    </div>
                  </div>
                  <a href="recipe.html" className="uk-position-cover" />
                </div>
              </div>
              <div>
                <div className="uk-card">
                  <div className="uk-card-media-top uk-inline uk-light">
                    <img
                      className="uk-border-rounded-medium"
                      src="https://source.unsplash.com/nTZOILVZuOg/300x160"
                      alt="Course Title"
                    />
                    <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium" />
                    <div className="uk-position-xsmall uk-position-top-right">
                      <a
                        href="#"
                        className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                        data-uk-icon="heart"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">
                      Awesome Slow Cooker Pot Roast
                    </h3>
                    <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                      <div className="uk-width-auto uk-flex uk-flex-middle">
                        <span
                          className="uk-rating-filled"
                          data-uk-icon="icon: star; ratio: 0.7"
                        />
                        <span className="uk-margin-xsmall-left">4.5</span>
                        <span>(153)</span>
                      </div>
                      <div className="uk-width-expand uk-text-right">
                        by Janet Small
                      </div>
                    </div>
                  </div>
                  <a href="recipe.html" className="uk-position-cover" />
                </div>
              </div>
              <div>
                <div className="uk-card">
                  <div className="uk-card-media-top uk-inline uk-light">
                    <img
                      className="uk-border-rounded-medium"
                      src="https://source.unsplash.com/Cf_Df-Zl8iw/300x160"
                      alt="Course Title"
                    />
                    <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium" />
                    <div className="uk-position-xsmall uk-position-top-right">
                      <a
                        href="#"
                        className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                        data-uk-icon="heart"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">
                      Broiled Tilapia Parmesan
                    </h3>
                    <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                      <div className="uk-width-auto uk-flex uk-flex-middle">
                        <span
                          className="uk-rating-filled"
                          data-uk-icon="icon: star; ratio: 0.7"
                        />
                        <span className="uk-margin-xsmall-left">5.0</span>
                        <span>(524)</span>
                      </div>
                      <div className="uk-width-expand uk-text-right">
                        by Aleaxa Dorchest
                      </div>
                    </div>
                  </div>
                  <a href="recipe.html" className="uk-position-cover" />
                </div>
              </div>
              <div>
                <div className="uk-card">
                  <div className="uk-card-media-top uk-inline uk-light">
                    <img
                      className="uk-border-rounded-medium"
                      src="https://source.unsplash.com/aGjP08-HbYY/300x160"
                      alt="Course Title"
                    />
                    <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium" />
                    <div className="uk-position-xsmall uk-position-top-right">
                      <a
                        href="#"
                        className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                        data-uk-icon="heart"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">
                      Baked Teriyaki Chicken
                    </h3>
                    <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                      <div className="uk-width-auto uk-flex uk-flex-middle">
                        <span
                          className="uk-rating-filled"
                          data-uk-icon="icon: star; ratio: 0.7"
                        />
                        <span className="uk-margin-xsmall-left">4.6</span>
                        <span>(404)</span>
                      </div>
                      <div className="uk-width-expand uk-text-right">
                        by Ben Kaller
                      </div>
                    </div>
                  </div>
                  <a href="recipe.html" className="uk-position-cover" />
                </div>
              </div>
              <div>
                <div className="uk-card">
                  <div className="uk-card-media-top uk-inline uk-light">
                    <img
                      className="uk-border-rounded-medium"
                      src="https://source.unsplash.com/SxTlB4fde9Q/300x160"
                      alt="Course Title"
                    />
                    <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium" />
                    <div className="uk-position-xsmall uk-position-top-right">
                      <a
                        href="#"
                        className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                        data-uk-icon="heart"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">
                      Zesty Slow Cooker Chicken
                    </h3>
                    <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                      <div className="uk-width-auto uk-flex uk-flex-middle">
                        <span
                          className="uk-rating-filled"
                          data-uk-icon="icon: star; ratio: 0.7"
                        />
                        <span className="uk-margin-xsmall-left">3.9</span>
                        <span>(629)</span>
                      </div>
                      <div className="uk-width-expand uk-text-right">
                        by Sam Brown
                      </div>
                    </div>
                  </div>
                  <a href="recipe.html" className="uk-position-cover" />
                </div>
              </div>
              <div>
                <div className="uk-card">
                  <div className="uk-card-media-top uk-inline uk-light">
                    <img
                      className="uk-border-rounded-medium"
                      src="https://source.unsplash.com/MNtag_eXMKw/300x160"
                      alt="Course Title"
                    />
                    <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium" />
                    <div className="uk-position-xsmall uk-position-top-right">
                      <a
                        href="#"
                        className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                        data-uk-icon="heart"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">
                      Rosemary Ranch Chicken Kabobs
                    </h3>
                    <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                      <div className="uk-width-auto uk-flex uk-flex-middle">
                        <span
                          className="uk-rating-filled"
                          data-uk-icon="icon: star; ratio: 0.7"
                        />
                        <span className="uk-margin-xsmall-left">3.6</span>
                        <span>(149)</span>
                      </div>
                      <div className="uk-width-expand uk-text-right">
                        by Theresa Samuel
                      </div>
                    </div>
                  </div>
                  <a href="recipe.html" className="uk-position-cover" />
                </div>
              </div>
              <div>
                <div className="uk-card">
                  <div className="uk-card-media-top uk-inline uk-light">
                    <img
                      className="uk-border-rounded-medium"
                      src="https://source.unsplash.com/Yr4n8O_3UPc/300x160"
                      alt="Course Title"
                    />
                    <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium" />
                    <div className="uk-position-xsmall uk-position-top-right">
                      <a
                        href="#"
                        className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                        data-uk-icon="heart"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">
                      Slow Cooker Pulled Pork
                    </h3>
                    <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                      <div className="uk-width-auto uk-flex uk-flex-middle">
                        <span
                          className="uk-rating-filled"
                          data-uk-icon="icon: star; ratio: 0.7"
                        />
                        <span className="uk-margin-xsmall-left">2.9</span>
                        <span>(309)</span>
                      </div>
                      <div className="uk-width-expand uk-text-right">
                        by Adam Brown
                      </div>
                    </div>
                  </div>
                  <a href="recipe.html" className="uk-position-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
