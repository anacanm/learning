class WelcomeController < ApplicationController
  def index
    @i = 4
    render
  end

  def disp
    if (params.has_key?(:id) && params.has_key?(:random))
      if(params[:id] == 25)
        @random  = params[:random]
      end
    end
  end

  def root
  end
end
