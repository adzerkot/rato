# Default to development if environment is not set.
saved = environment
if (environment.nil?)
  environment = :development
else
  environment = saved
end

# Location of the theme's resources.
css_dir = "css"
sass_dir = "css/bootstrap"
images_dir = "images"
javascripts_dir = "js"

# Require any additional compass plugins installed on your system.
require 'compass-normalize'
require 'rgbapng'
require 'sass-globbing'
output_style = :compressed # :expanded or :nested or :compact or :compressed
 

# To enable relative paths to assets via compass helper functions. Since Drupal
# themes can be installed in multiple locations, we don't need to worry about
# the absolute path to the theme from the server omega.
relative_assets = true

# Conditionally enable line comments when in development mode.
line_comments = (environment == :production) ? false : true

# Output debugging info in development mode.
sass_options = (environment == :production) ? {} : {:debug_info => true}

# Add the 'sass' directory itself as an import path to ease imports.
add_import_path 'sass'