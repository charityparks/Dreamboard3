class BoardSerializer
  include FastJsonapi::ObjectSerializer
  attributes :entry
  has_many :entries, serializer: EntrySerializer 

  # attribute :entries do |board|
  #   board.entries.map do |ent|
  #     {
  #       item: ent.item
  #     }
  #     end
    # end
end
